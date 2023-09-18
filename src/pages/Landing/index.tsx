import { LocalImage } from '../../common/atoms/image';
import {
    Container,
    DescriptionContainer,
    IntroContainer,
} from '../../common/atoms/container';
import { ChallengeLandingBox, IconDescContainer } from './components/box';
import React from 'react';

const LandingPage = () => {
    return (
        <div className="App">
            <header className="header"></header>
            <body className="body">
                <LocalImage src="main_ carousel1.png" height="300px" />
                <IntroContainer>
                    <LocalImage width="300px" src="landingImg2.png" />
                    <DescriptionContainer
                        width="300px"
                        height="100%"
                        title="당신의 추억을 네컷앨범이 기억할게요"
                        description="관리하기 힘들던 네컷 사진을 네컷앨범에서 기록하고 관리할 수 있어요."
                    />
                </IntroContainer>
                <IntroContainer>
                    <LocalImage width="300px" src="landingImg1.png" />
                    <DescriptionContainer
                        width="300px"
                        title="특별한 추억을 네컷앨범에서 만들어 보세요"
                        description="네컷 사진을 특별하게 꾸미고 여러 사람들에게 공유할 수 있어요."
                    />
                </IntroContainer>
                <Container>
                    <h2>열심히 기록한 당신에게</h2>
                    <ChallengeLandingBox />
                    <IconDescContainer />
                </Container>
            </body>
        </div>
    );
};

export default LandingPage;
