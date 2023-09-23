import React from 'react';
import './box.scss';
import { LocalImage } from '../../../common/atoms/image';
import { DescriptionContainer } from '../../../common/atoms/MainContainer';

interface IconDescBoxProps {
    img: string;
    title: string;
    desc: string;
}
//color,children,
export const ChallengeBox = ({ children }: { children?: React.ReactNode }) => {
    return <div className="challenge">{children}</div>;
};

export const ChallengeLandingBox = () => {
    return (
        <div style={{ marginTop: '20', padding: '40px 0px' }}>
            <ChallengeBox>
                <div className="challenge" style={{ zIndex: '10' }} />
                <div
                    className="challenge behind"
                    style={{ top: '20px', left: '20px', zIndex: '9' }}
                />
                <div
                    className="challenge behind"
                    style={{ top: '40px', left: '40px', zIndex: '8' }}
                />
            </ChallengeBox>
        </div>
    );
};

export const IconDescBox = ({ img, title, desc }: IconDescBoxProps) => {
    return (
        <div className="col" style={{ padding: '20px', width: '150px' }}>
            <LocalImage width="80px" src={img} />
            <DescriptionContainer
                title={title}
                description={desc}
                isCenter={true}
            />
        </div>
    );
};

export const IconDescContainer = () => {
    return (
        <div
            className="row"
            style={{
                width: '100%',
                justifyContent: 'space-around',
            }}
        >
            <IconDescBox
                img="medal.png"
                title="도전과제"
                desc="다양한 과제를 달성하고 네컷앨범만의 혜택을 누려보세요."
            />
            <IconDescBox
                img="camera.png"
                title="네컷촬영"
                desc="당신의 기록 하나를 네컷앨범에 맡겨보세요."
            />
        </div>
    );
};
