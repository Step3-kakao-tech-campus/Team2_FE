import { Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID } from './component/store';
import { useMultiplayerState } from './component/useMultiplayer';
const Canvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);
    //event쪽에 yjs연결이랑 이미지 깨지는 이유가 있다..왠지 몰루?
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
