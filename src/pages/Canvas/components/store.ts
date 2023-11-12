import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { TDAsset, TDBinding, TDShape } from '@tldraw/tldraw';
import { useEffect, useMemo } from 'react';
import { useUsers } from 'y-presence';

export default function useYjsStore(pageId: string, albumId: string) {
    const doc = useMemo(() => new Y.Doc(), [pageId]);
    const wsProvider = useMemo(() => {
        console.log('wsProvider', pageId);
        return new WebsocketProvider(
            'ws://localhost:1234',
            pageId + '-' + albumId,
            doc,
            {
                connect: false,
            },
        );
    }, [pageId]);
    const users = useUsers(wsProvider.awareness);
    // console.log('users', users);
    useEffect(() => {
        wsProvider.connect();
        return () => {
            wsProvider.disconnect();
        };
    }, [pageId]);
    const yShapes: Y.Map<TDShape> = doc.getMap('shapes');
    const yBindings: Y.Map<TDBinding> = doc.getMap('bindings');
    const yAssets: Y.Map<TDAsset> = doc.getMap('assets');
    const undoManager = new Y.UndoManager([yShapes, yBindings, yAssets]);

    return {
        doc,
        wsProvider,
        yShapes,
        yBindings,
        yAssets,
        undoManager,
        users,
    };
}
