import { Tldraw, useFileSystem, TldrawApp } from '@tldraw/tldraw';
import { useMultiplayerState } from './components/useMultiplayer';
import { useCallback } from 'react';
import { YStatus } from './editContainer';
import { CanvasResponse } from '../../service/album';
import Button from '../../common/atoms/Button';

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
        getImg,
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

    const handleGetImg = async () => {
        const img = await getImg();
        console.log(img);
        // POST 메서드 구현해야됨
    };

    return (
        <div className="canvas">
            <Button className="save_canvas" onClick={handleGetImg}>
                저장하기
            </Button>
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
