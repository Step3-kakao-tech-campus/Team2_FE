import {
    Tldraw,
    useFileSystem,
    TDDocument,
    TDFile,
    TldrawApp,
    TDToolType,
    TDShapeType,
} from '@tldraw/tldraw';
import './index.scss';
import { useUsers } from 'y-presence';
import { awareness, roomID, wsProvider } from './components/store';
import { useMultiplayerState } from './components/useMultiplayer';
import { useState } from 'react';
import {
    createContext,
    useContext,
    useCallback,
    PropsWithChildren,
} from 'react';

const AppContext = createContext<TldrawApp>({} as any);
type YStatus = 'disconnected' | 'connecting' | 'connected';

function useApp() {
    return useContext(AppContext);
}

function SelectToolButton({
    type,
    children,
}: PropsWithChildren<{
    type: TDToolType;
    tldrawApp?: TldrawApp;
}>) {
    const app = useApp();

    // App.useStore is the same as a Zustand store's useStore hook!
    const isActive = app.useStore(app => {
        return app.appState.activeTool === type;
    });

    return (
        <button
            onClick={() => app.selectTool(type)}
            style={{
                border: '1px solid #333',
                background: isActive ? 'papayawhip' : 'transparent',
                fontSize: '1.5rem',
                padding: '0.3em 0.8em',
                borderRadius: '0.15em',
            }}
        >
            {children}
        </button>
    );
}

function SelectImageButton({
    children,
}: PropsWithChildren<{
    tldrawApp?: TldrawApp;
}>) {
    const app = useApp();

    // App.useStore is the same as a Zustand store's useStore hook!

    return (
        <button
            onClick={async () => {
                await app.openAsset();
            }}
            style={{
                border: '1px solid #333',
                background: 'transparent',
                fontSize: '1.5rem',
                padding: '0.3em 0.8em',
                borderRadius: '0.15em',
            }}
        >
            {children}
        </button>
    );
}

function StickerButton({
    children,
}: PropsWithChildren<{
    tldrawApp?: TldrawApp;
}>) {
    const app = useApp();
    // let file=
    // const file =
    //     'https://cdn.mobalytics.gg/assets/lol/images/dd/summoner-icons/4559.png?1';
    // App.useStore is the same as a Zustand store's useStore hook!

    return (
        <button
            onClick={() => {
                // app.addMediaFromFiles(file, app.centerPoint);
            }}
            style={{
                border: '1px solid #333',
                background: 'transparent',
                fontSize: '1.5rem',
                padding: '0.3em 0.8em',
                borderRadius: '0.15em',
            }}
        >
            {children}
        </button>
    );
}

const Canvas = () => {
    const fileSystemEvents = useFileSystem();
    const { onMount, ...events } = useMultiplayerState(roomID);
    const [app, setApp] = useState<TldrawApp>();

    const handleMount = useCallback((app: TldrawApp) => {
        setApp(app);
        onMount(app);
    }, []);
    const userId = '1';

    return (
        <div className="tldraw">
            <Info />
            <Tldraw
                // id="tldraw-canvas"
                onMount={handleMount}
                showPages={false}
                showMenu={false}
                showTools={false}
                {...events}
                {...fileSystemEvents}
            />
            {app && (
                <AppContext.Provider value={app}>
                    <div
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            gap: '1em',
                            zIndex: 100,
                            bottom: '1em',
                            left: '1em',
                        }}
                    >
                        <SelectToolButton type="select">
                            Select
                        </SelectToolButton>
                        <SelectToolButton type="erase">Erase</SelectToolButton>
                        <SelectToolButton type={TDShapeType.Rectangle}>
                            Rectangle
                        </SelectToolButton>
                        <SelectToolButton type={TDShapeType.Ellipse}>
                            Ellipse
                        </SelectToolButton>
                        <SelectToolButton type={TDShapeType.Sticky}>
                            Card
                        </SelectToolButton>
                        <SelectToolButton type={TDShapeType.Line}>
                            Line
                        </SelectToolButton>
                        {/*imagebtn*/}
                        <SelectImageButton>Image</SelectImageButton>
                    </div>
                </AppContext.Provider>
            )}
        </div>
    );
};

function Info() {
    const users = useUsers(awareness);

    // console.log('users', users.get);

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
