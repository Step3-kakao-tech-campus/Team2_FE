import { Tldraw, TldrawApp, useFileSystem, TDUserStatus } from '@tldraw/tldraw';
import { TLPageState } from '@tldraw/core';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID } from './component/store';
import { useMultiplayerState } from './component/useMultiplayer';
import React, { useRef, useEffect } from 'react';

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
