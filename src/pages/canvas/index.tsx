import { Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID } from './component/store';
import { useMultiplayerState } from './component/useMultiplayer';
const CustomCanvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);

    return (
        <div className="tldraw">
            <Info />
            <div className="canvas">
                <Tldraw
                    id="tldraw-canvas"
                    onMount={onMount}
                    {...events}
                    {...fileSystemEvents}
                    autofocus={true}
                />
            </div>
            <div>byebye</div>
        </div>
    );
};

function Info() {
    const users = useUsers(awareness);

    return (
        <div className="info p-md">
            <div className="flex space-between">
                <span>Number of connected users: {users.size}</span>
            </div>
        </div>
    );
}

export default CustomCanvas;
