import React from 'react';
import "./index.scss";
import { Container } from '../../common/atoms/Container';
import TitleHoldCard, { getImage } from './components/titlehold';
import rewordApi from '../../service/rewards';
import { useQuery } from 'react-query';
import { get } from 'http';
import { titleApi } from '../../service/titles';
import RewordCard from './components/reword';


const ChallengePage: React.FC = () => {
    const { isLoading, isError, data: reword, error } = useQuery({
        queryKey: ['rewords'],
        queryFn: rewordApi.getUserRewords,
    });
    const { isLoading: isLoading2, isError: isError2,
            data: title, error: error2  } = useQuery({
        queryKey: ['titles'],
        queryFn: titleApi.getUserTitle,
    });

    const mainTitle = title?.titles[0];

    return (
        <div className='challenge'>
            <Container className='challenge_title'>
                <h1>도전과제</h1>
                <p>도전과제를 통해<br/>네컷앨범만의 혜택을 누려보세요.</p>
            </Container>
            <Container className='challenge_titlehold'>
                <Container className='challenge_titlehold_title'>
                    <h1>칭호 변경하기</h1>
                    <p>여기에 칭호 변경에 대한 설명을 넣으세요.</p>
                </Container>
                <Container className="challenge_titlehold_subtitle">
                    <h2>지금까지 획득한 칭호</h2>
                </Container>
                <TitleHoldCard
                    title={mainTitle?.titleName}
                    titleName={mainTitle?.titleSub}
                    description={mainTitle?.titleDescription}
                    image1="/assets/badge_star.png"
                    image2={getImage(mainTitle?.titleGrade)}
                />
            </Container>
            <Container className='challenge_reward'>
                <Container className='challenge_reward_title'>
                    <h1>도전 과제</h1>
                    <p>여기에 도전 과제 제출에 대한 설명을 넣으세요.</p>
                </Container>
                {reword?.rewards.map((reward, index) => (
                <RewordCard 
                    key={reward.rewardId} // 유일한 key prop을 전달해야 합니다.
                    title={reward?.rewardName}
                    description={reward?.description}
                    image={getImage(reward?.level)}
                    count={reward?.count}
                    goalCount={reward?.goalCount}
                />
             ))}
            </Container>
        </div>
    );
};

export default ChallengePage;
