import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { TDAsset, TDBinding, TDShape } from '@tldraw/tldraw';

const VERSION = 1;

// Create the doc
export const doc = new Y.Doc();

export const roomID = `my-room-${VERSION}`;

// Create a websocket provider
export const wsProvider = new WebsocketProvider(
    'ws://localhost:1234',
    roomID,
    doc,
    {
        connect: true,
    },
);

// Export the provider's awareness API
export const awareness = wsProvider.awareness;

export const yShapes: Y.Map<TDShape> = doc.getMap('shapes');
export const yBindings: Y.Map<TDBinding> = doc.getMap('bindings');
export const yAssets: Y.Map<TDAsset> = doc.getMap('assets');

// Create an undo manager for the shapes and binding maps
export const undoManager = new Y.UndoManager([yShapes, yBindings, yAssets]);
