import { TDShapeType, TDToolType, TldrawApp } from '@tldraw/tldraw';
import { PropsWithChildren, useEffect, useState } from 'react';
import Button from '../../common/atoms/Button';
import Modal from '../../common/organisms/Modal';
import Scanner from './components/Scanner';
import axios from 'axios';
import uuid from 'react-uuid';

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
    const [isModalOpen, setModalOpen] = useState(false);
    const [scanData, setScanData] = useState<string | null>(null);
    const [imgStatus, setImgStatus] = useState('이미지 로딩 중');

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        if (scanData && scanData.includes('http')) {
            getImgSrcFromUrl(scanData);
        }
    }, [scanData]);

    const modalProps = {
        className: 'qrModal',
        contentOnly: true,
        onClose: handleCloseModal,
    };

    const getImgSrcFromUrl = async (url: string) => {
        try {
            const headResponse = await axios.head(url);
            const contentType = headResponse.headers['content-type'];
            const isImage = contentType.includes('image');
            if (isImage) {
                const extension = contentType.split('/')[1];
                const response = await axios.get(url, {
                    responseType: 'blob',
                });
                const blob = response.data;
                const fileName = uuid();
                console.log(fileName, extension);
                const file = new File([blob], fileName + '.' + extension, {
                    type: contentType,
                });
                await app.addMediaFromFiles([file], app.centerPoint);
                setModalOpen(false);
            } else {
                setImgStatus('이미지가 아닙니다.');
            }
        } catch (e) {
            console.log('getImgSrcFromUrl', e);
            setImgStatus('이미지 로딩 실패');
        }
    };

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
                <Modal {...modalProps}>
                    <Scanner setScanData={setScanData} />
                    {scanData && (
                        <div
                            style={{
                                display: 'inline-block',
                                margin: '0 auto',
                            }}
                        >
                            {scanData}
                            <div>{imgStatus}</div>
                        </div>
                    )}
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
