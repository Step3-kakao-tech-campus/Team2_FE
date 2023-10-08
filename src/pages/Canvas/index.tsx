import { Tldraw, TldrawApp, useFileSystem, TDUserStatus } from '@tldraw/tldraw';
import { TLPageState } from '@tldraw/core';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID } from './components/store';
import { useMultiplayerState } from './components/useMultiplayer';

const MAX_ZOOM_LEVEL = 2; // 200%
const MIN_ZOOM_LEVEL = 0.5; // 50%

const Canvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);

    const handleOnChange = (e: any) => {
       if (e.pageState.camera.zoom > MAX_ZOOM_LEVEL) {
        e.pageState.camera.zoom = MAX_ZOOM_LEVEL;
        return ;
       }
       else if (e.pageState.camera.zoom < MIN_ZOOM_LEVEL) {
        e.pageState.camera.zoom = MIN_ZOOM_LEVEL;
        return ;
       }

    }

    return (
        <div className="tldraw">
            <Info />
            <Tldraw
                id="tldraw-canvas"
                onMount={onMount}
                onChange={handleOnChange}
                {...events}
                {...fileSystemEvents}
            />
        </div>
    );
};

function Info() {
    const users = useUsers(awareness);

    return (
        <div className="absolute p-md">
            <div className="flex space-between">
                <span>Number of connected users: {users.size}</span>
            </div>
        </div>
    );
}

export default Canvas;
