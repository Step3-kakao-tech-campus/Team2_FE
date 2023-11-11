import { Tldraw, useFileSystem, TldrawApp } from '@tldraw/tldraw';
import { useMultiplayerState } from './components/useMultiplayer';
import { useCallback } from 'react';
import { YStatus } from './editContainer';
import { CanvasResponse } from '../../service/album';
import { CanvasSize } from './const';

const Canvas = ({
    setApp,
    pageId,
    albumId,
    data,
    setYStatus,
    setUserNum,
}: {
    setApp: (app: TldrawApp) => void;
    pageId: string;
    albumId: string;
    data: CanvasResponse;
    setYStatus: (status: YStatus) => void;
    setUserNum: (num: number) => void;
}) => {
    const fileSystemEvents = useFileSystem();
    const {
        onMount,
        onChange,
        onChangePage,
        onUndo,
        onRedo,
        onChangePresence,
    } = useMultiplayerState(pageId, albumId, data, setYStatus, setUserNum);

    const handleMount = useCallback((app: TldrawApp) => {
        setApp(app);
        onMount(app);
    }, []);

    return (
        <div
            className="canvas"
            style={{
                maxWidth: CanvasSize.width + 'px',
                maxHeight: CanvasSize.height + 'px',
            }}
        >
            <Tldraw
                // id="tldraw-canvas"
                onMount={handleMount}
                onChange={onChange}
                onChangePage={onChangePage}
                onUndo={onUndo}
                onRedo={onRedo}
                onChangePresence={onChangePresence}
                showPages={false}
                showMenu={false}
                showTools={false}
                {...fileSystemEvents}
            />
        </div>
    );
};

export default Canvas;
