import { ReactNode } from 'react';
import './Containers.scss';
import Button from '../../../../common/atoms/Button';
interface ComponentProps {
    children: ReactNode;
}
export const WrapContainer = ({ children }: ComponentProps) => {
    return <div className="album_wrap_container">{children}</div>;
};
export const TitleContainer = () => {
    return (
        <div className="album_title_container">
            <div className="title">내 그룹</div>
            <Button className="create" onClick={() => {}}>
                + 그룹 생성
            </Button>
        </div>
    );
};

export const TipBox = () => {
    return (
        <div className="album_tip_box">
            TIP. 포토 앨범을 클릭하여 앨범으로 이동할 수 있어요.
        </div>
    );
};
