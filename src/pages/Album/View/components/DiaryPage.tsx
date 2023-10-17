import { Tldraw } from '@tldraw/tldraw';
import './DiaryPage.scss';

const DiaryPage = () => {
    return (
        <div className="diary_page">
            <div className="diary_content">
                <Tldraw
                    id="tldraw-canvas"
                    showMenu={false}
                    showMultiplayerMenu={false}
                    showPages={false}
                    readOnly={true}
                />
            </div>
        </div>
    );
};

export default DiaryPage;
