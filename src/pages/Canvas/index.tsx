import { Tldraw, useFileSystem } from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID, wsProvider } from './components/store';
import { useMultiplayerState } from './components/useMultiplayer';
import { useState } from 'react';

type YStatus = 'disconnected' | 'connecting' | 'connected';

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
    const [yStatus, setYStatus] = useState<YStatus>('disconnected');
    wsProvider.on('status', ({ status }: { status: YStatus }) => {
        setYStatus(status);
    });

    return (
        <div className="absolute p-md">
            <div className="flex space-between">
                <span>Number of connected users: {users.size}</span>
                <span>Yjs status: {yStatus}</span>
            </div>
        </div>
    );
}

export default Canvas;
