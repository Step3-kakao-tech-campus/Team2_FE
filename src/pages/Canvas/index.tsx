import { Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID } from './components/store';
import { useMultiplayerState } from './components/useMultiplayer';
const Canvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);

    return (
        <div className="tldraw">
            <Info />
            <Tldraw
                id="tldraw-canvas"
                onMount={onMount}
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
