import { TDAsset, TDBinding, TDShape, TDUser, TldrawApp } from '@tldraw/tldraw';
import { useCallback, useEffect, useRef } from 'react';
import useYjsStore from './store';
import { YStatus } from '../editContainer';
import { CanvasResponse } from '../../../service/album';
import { CanvasSize } from '../const';

export function useMultiplayerState(
    roomId: string,
    albumId: string,
    data: CanvasResponse,
    setYStatus: (status: YStatus) => void,
    setUserNum: (num: number) => void,
) {
    const tldrawRef = useRef<TldrawApp>();
    const { doc, wsProvider, yShapes, yBindings, yAssets, undoManager } =
        useYjsStore(roomId, albumId);

    const awareness = wsProvider.awareness;

    wsProvider.on('status', ({ status }: { status: YStatus }) => {
        setYStatus(status);
    });

    function handleChanges() {
        const tldraw = tldrawRef.current;

        if (!tldraw) return;
        console.log('page', tldraw.page);

        const shapes = Object.fromEntries(yShapes.entries());
        const bindings = Object.fromEntries(yBindings.entries());
        const assets = Object.fromEntries(yAssets.entries());
        // console.log('handleChangesshapes', shapes);
        // console.log('handleChangesbindings', bindings);
        // console.log('handleChangesassets', assets);

        tldraw.replacePageContent(shapes, bindings, assets);
    }

    const onMount = useCallback(
        (app: TldrawApp) => {
            wsProvider.connect();
            app.loadRoom(roomId);
            app.pause();
            tldrawRef.current = app;
            console.log('onMount', app.getPageState());
            const { shapes, bindings, assets } = data;
            console.log('onMountshapes', shapes);
            console.log('onMountbindings', bindings);
            console.log('onMountassets', assets);
            console.log('onMountuser', app.room?.users);
            // app.updateUsers([app.pageState]);

            onChangePage(
                app,
                shapes as Record<string, TDShape | undefined>,
                bindings as Record<string, TDBinding | undefined>,
                assets as Record<string, TDAsset | undefined>,
            );
        },
        [roomId],
    );

    const onChange = useCallback((app: TldrawApp) => {
        const { minX, minY, maxX, maxY, height, width } = app.viewport;
        const allowedArea = {
            minX: 0,
            minY: 0,
            width: CanvasSize.width,
            height: CanvasSize.height,
        };
        let minZoom = Math.max(
            width / allowedArea.width,
            height / allowedArea.height,
        );
        // console.log('minZoom', minZoom, width);
        // if (app.pageState.camera.zoom > MAX_ZOOM_LEVEL) {
        //     app.pageState.camera.zoom = MAX_ZOOM_LEVEL;
        //     return;
        // } else
        if (app.pageState.camera.zoom < minZoom) {
            app.pageState.camera.zoom = minZoom;
            return;
        }

        if (minX < allowedArea.minX) {
            app.setCamera([allowedArea.minX, -minY], app.camera.zoom, '');
        }
        if (minY < allowedArea.minY) {
            app.setCamera([-minX, allowedArea.minY], app.camera.zoom, '');
        }
        if (maxX > allowedArea.width) {
            app.setCamera(
                [-(allowedArea.width - width), -minY],
                app.camera.zoom,
                '',
            );
        }
        if (maxY > allowedArea.height) {
            app.setCamera(
                [-minX, -(allowedArea.height - height)],
                app.camera.zoom,
                '',
            );
        }
    }, []);

    const onChangePage = useCallback(
        (
            app: TldrawApp,
            shapes: Record<string, TDShape | undefined>,
            bindings: Record<string, TDBinding | undefined>,
            assets: Record<string, TDAsset | undefined>,
        ) => {
            console.log('page', app.pageState);
            console.log('onChangePageshapesdasdf', shapes);
            undoManager.stopCapturing();
            doc.transact(() => {
                Object.entries(shapes).forEach(([id, shape]) => {
                    if (!shape) {
                        yShapes.delete(id);
                    } else {
                        console.log('onChangePageshape', shape);
                        yShapes.set(shape.id, shape);
                    }
                });
                Object.entries(bindings).forEach(([id, binding]) => {
                    if (!binding) {
                        yBindings.delete(id);
                    } else {
                        console.log('onChangePagebinding', binding);
                        yBindings.set(binding.id, binding);
                    }
                });
                Object.entries(assets).forEach(([id, asset]) => {
                    if (!asset) {
                        yAssets.delete(id);
                    } else {
                        console.log('onChangePageasset', asset);
                        yAssets.set(asset.id, asset);
                    }
                });
            });
        },
        [],
    );

    const onUndo = useCallback(() => {
        undoManager.undo();
    }, []);

    const onRedo = useCallback(() => {
        undoManager.redo();
    }, []);

    /**
     * Callback to update user's (self) presence
     */
    const onChangePresence = useCallback((app: TldrawApp, user: TDUser) => {
        awareness.setLocalStateField('tdUser', user);
    }, []);

    /**
     * Update app users whenever there is a change in the room users
     */
    useEffect(() => {
        const onChangeAwareness = () => {
            const tldraw = tldrawRef.current;

            if (!tldraw || !tldraw.room) return;

            const others = Array.from(awareness.getStates().entries())
                .filter(([key, _]) => key !== awareness.clientID)
                .map(([_, state]) => state)
                .filter(user => user.tdUser !== undefined);

            const ids = others.map(other => other.tdUser.id as string);

            Object.values(tldraw.room.users).forEach(user => {
                if (
                    user &&
                    !ids.includes(user.id) &&
                    user.id !== tldraw.room?.userId
                ) {
                    tldraw.removeUser(user.id);
                }
            });

            tldraw.updateUsers(
                others.map(other => other.tdUser).filter(Boolean),
            );
            setUserNum(Object.keys(tldraw.room.users).length);
        };

        awareness.on('change', onChangeAwareness);

        return () => awareness.off('change', onChangeAwareness);
    }, []);

    useEffect(() => {
        yShapes.observeDeep(handleChanges);

        return () => yShapes.unobserveDeep(handleChanges);
    }, []);

    useEffect(() => {
        function handleDisconnect() {
            wsProvider.disconnect();
        }
        window.addEventListener('beforeunload', handleDisconnect);

        return () =>
            window.removeEventListener('beforeunload', handleDisconnect);
    }, []);

    return {
        onMount,
        onChange,
        onChangePage,
        onUndo,
        onRedo,
        onChangePresence,
    };
}
