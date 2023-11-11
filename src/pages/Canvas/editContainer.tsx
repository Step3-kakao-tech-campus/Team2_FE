import { TDExportType, TldrawApp } from '@tldraw/tldraw';
import './index.scss';
import { useCallback, useState } from 'react';
import Canvas from './canvas';
import ToolBar from './toolbar';
import albumApi, { CanvasResponse } from '../../service/album';
import Button from '../../common/atoms/Button';
import { useNavigate } from 'react-router-dom';

export type YStatus = 'disconnected' | 'connecting' | 'connected';

interface canvasEditContainerProps {
    pageId: string;
    albumId: string;
    data: CanvasResponse;
}

const CanvasEditContainer = ({
    pageId,
    albumId,
    data,
}: canvasEditContainerProps) => {
    const [app, setApp] = useState<TldrawApp>();
    const [yStatus, setYStatus] = useState<YStatus>('disconnected');
    const [userNum, setUserNum] = useState<number>(0);

    return (
        <div className="tldraw">
            <div className="info">
                <Info userNum={userNum} yStatus={yStatus} />
                <div>-{pageId}-</div>
                <ActionButtons app={app} pageId={pageId} albumId={albumId} />
            </div>
            <Canvas
                setApp={setApp}
                pageId={pageId}
                albumId={albumId}
                data={data}
                setYStatus={setYStatus}
                setUserNum={setUserNum}
            />
            {app && <ToolBar app={app} />}
        </div>
    );
};

function Info({ userNum, yStatus }: { userNum: number; yStatus: YStatus }) {
    return (
        <div className="actions">
            <div style={{ marginRight: '10px' }}>접속 유저 수: {userNum}</div>
            <div>
                소켓 연결: {yStatus === 'connected' ? '연결됨' : '연결안됨'}
            </div>
        </div>
    );
}

function ActionButtons({
    app,
    pageId,
    albumId,
}: {
    app?: TldrawApp;
    pageId: string;
    albumId: string;
}) {
    const navigate = useNavigate();
    const handlePageView = () => {
        if (app) {
            const appWidth = app.viewport.width;
            const appHeight = app.viewport.height;
            if (appHeight / appWidth < 4 / 3) {
                //높이기준 넓이계산
            } else {
                //넓이기준 높이계산
            }
        }
    };

    const getCapturedBlob = async () => {
        if (app) {
            return await app.getImage(TDExportType.PNG, {
                scale: 1,
                quality: 1,
                transparentBackground: true,
            });
        }
    };
    const getCapturedImg = () => {
        return new Promise((resolve, reject) => {
            getCapturedBlob()
                .then(blob => {
                    if (blob) {
                        const reader = new FileReader();
                        reader.onloadend = function () {
                            let base64Data = reader.result;
                            resolve(base64Data);
                        };
                        reader.onerror = function (error) {
                            reject(error);
                        };
                        reader.readAsDataURL(blob);
                    } else {
                        reject(new Error('No image data'));
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    };
    const handleSave = async () => {
        try {
            // if (!app) throw Error('app이 로딩중입니다.');
            const capturedImage = await getCapturedImg();
            const data: CanvasResponse = {
                shapes: {},
                bindings: {},
                assets: {},
            };
            if (app) {
                app.shapes.forEach(shape => {
                    data.shapes[shape.id] = shape;
                });
                app.bindings.forEach(binding => {
                    data.bindings[binding.id] = binding;
                });
                app.assets.forEach(asset => {
                    data.assets[asset.id] = asset;
                });
                const postData = {
                    ...data,
                    capturePage: capturedImage,
                };
                console.log(postData);
                await albumApi.saveAlbumCanvas(albumId, pageId, postData);
                alert('저장되었습니다.');
            }
        } catch (e) {
            console.log(e);
            alert('저장에 실패했습니다.:\n' + e);
        }
    };

    return (
        <div className="actions">
            <Button onClick={() => {}} className="view_ctrl">
                전체보기
            </Button>
            <Button
                onClick={async () => {
                    await handleSave();
                    navigate(`/album/view/${albumId}`);
                }}
                className="save"
            >
                저장
            </Button>
        </div>
    );
}
export default CanvasEditContainer;
