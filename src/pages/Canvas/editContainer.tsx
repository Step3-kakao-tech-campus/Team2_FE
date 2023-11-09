import { TldrawApp } from '@tldraw/tldraw';
import './index.scss';
import { useState } from 'react';
import Canvas from './canvas';
import ToolBar from './toolbar';
import { CanvasResponse } from '../../service/album';
import Button from '../../common/atoms/Button';

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

    return (
        <div className="tldraw">
            <div className="info">
                <Info userNum={userNum} yStatus={yStatus} />
                <div>-{pageId}-</div>
                <div className="actions">
                    <Button onClick={() => {}} className="view_ctrl">
                        전체보기
                    </Button>
                    <Button onClick={() => {}} className="save">
                        저장
                    </Button>
                </div>
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

export default CanvasEditContainer;
