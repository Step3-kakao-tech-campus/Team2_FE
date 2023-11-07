import { useQuery } from 'react-query';
import albumApi from '../../service/album';

import { Tldraw, useFileSystem, TDDocument, TDFile } from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID, wsProvider } from './components/store';
import { useMultiplayerState } from './components/useMultiplayer';
import { useState } from 'react';

type YStatus = 'disconnected' | 'connecting' | 'connected';

const Canvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);

    const userId = '1';
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getCanvasExample,
    });

    if (data) {
        return (
            <div className="tldraw">
                <Info />
                <Tldraw
                    // id="tldraw-canvas"
                    onMount={onMount}
                    showPages={false}
                    {...events}
                    {...fileSystemEvents}
                />
            </div>
        );
    }

    return <div>Loading...</div>;
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

// json으로 불러온 객체의 타입을 지정해줘야하는데 어케해야할지 잘 모르겠어서 any로 함
const initialDocument = (doc: any): TDDocument => {
    // const json = require('./NewDocument.json');
    // console.log('doc', doc);
    const tdFile: TDFile = {
        name: doc.name,
        fileHandle: null,
        document: doc.document,
    };
    console.log('document', tdFile.document);
    // console.log("type", document.type);
    return tdFile.document;
};

export default Canvas;
