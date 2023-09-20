import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Contain';
import { LocalImage } from '../../common/atoms/image';
import Button from '../../common/atoms/Button';

const FindUsernameResultPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignupClick = () => {
        navigate('/verify');
    };

    return (
        <Container>
            <Title>
                <div className="logo">
                    <LocalImage
                        src="logo_big.png"
                        width="200px"
                        height="auto"
                    />
                </div>
                <h1>아이디 찾기</h1>
            </Title>
            <Content>
                <form className="form_find_username">
                    <Button
                        className="reset_password"
                        onClick={handleSignupClick}
                    >
                        회원가입
                    </Button>
                </form>
            </Content>
        </Container>
    );
};

export default FindUsernameResultPage;
