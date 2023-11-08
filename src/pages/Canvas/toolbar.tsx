import { TDShapeType, TDToolType, TldrawApp } from '@tldraw/tldraw';
import { PropsWithChildren, useEffect, useState } from 'react';
import Button from '../../common/atoms/Button';
import Modal from '../../common/molecules/Modal';
import ScannerPage from '../QrScan';

const imageStyle = {
    width: '20px',
    height: '20px',
    margin: '0.5em',
};

const ToolBar = ({ app }: { app: TldrawApp }) => {
    return (
        <div className="toolbox">
            <SelectToolButton type="select" app={app} />
            <SelectToolButton type="erase" app={app} />
            <SelectToolButton type={TDShapeType.Rectangle} app={app} />
            <SelectToolButton type={TDShapeType.Ellipse} app={app} />
            <SelectToolButton type={TDShapeType.Sticky} app={app} />
            <SelectToolButton type={TDShapeType.Line} app={app} />
            <SelectToolButton type={TDShapeType.Text} app={app} />
            <SelectImageButton app={app} />
            <SelectQrButton app={app} />
        </div>
    );
};
function SelectToolButton({
    type,
    app,
}: PropsWithChildren<{
    app: TldrawApp;
    type: TDToolType;
    tldrawApp?: TldrawApp;
}>) {
    // App.useStore is the same as a Zustand store's useStore hook!
    const isActive = app.useStore(app => {
        return app.appState.activeTool === type;
    });

    return (
        <Button
            onClick={() => app.selectTool(type)}
            imageSrc={`tools/${type}.png`}
            className="icon"
            style={{
                background: isActive ? 'papayawhip' : 'transparent',
            }}
            imageStyle={imageStyle}
        />
    );
}

function SelectImageButton({
    app,
}: PropsWithChildren<{
    app: TldrawApp;
    tldrawApp?: TldrawApp;
}>) {
    // App.useStore is the same as a Zustand store's useStore hook!

    return (
        <Button
            onClick={async () => {
                await app.openAsset();
            }}
            imageSrc={`tools/image.png`}
            className="icon"
            style={{
                background: 'transparent',
            }}
            imageStyle={imageStyle}
        />
    );
}

function SelectQrButton({
    app,
}: PropsWithChildren<{
    app: TldrawApp;
    tldrawApp?: TldrawApp;
}>) {
    // App.useStore is the same as a Zustand store's useStore hook!
    const [isModalOpen, setModalOpen] = useState(false);
    const [scanData, setScanData] = useState<String | null>(null);

    useEffect(() => {
        console.log(scanData);
    }, [scanData]);

    return (
        <>
            <Button
                onClick={() => {
                    setModalOpen(true);
                }}
                imageSrc={`tools/qr.png`}
                className="icon"
                style={{
                    background: 'transparent',
                }}
                imageStyle={imageStyle}
            />
            {isModalOpen && (
                <Modal setModalOpen={setModalOpen} className="qrModal">
                    <ScannerPage />
                </Modal>
            )}
        </>
    );
}
function StickerButton({
    app,
}: PropsWithChildren<{
    app: TldrawApp;
    tldrawApp?: TldrawApp;
}>) {
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
        ></button>
    );
}

export default ToolBar;
