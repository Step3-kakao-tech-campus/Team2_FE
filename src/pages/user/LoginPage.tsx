import React, { useState, ChangeEvent } from 'react';

import './style.scss';
import { Container, Title, Content } from '../../common/atoms/Container';
import { LocalImage } from '../../common/atoms/image';
import { Form, FormItem } from '../../common/atoms/Form';
import Button from '../../common/atoms/Button';

const LoginPage: React.FC = () => {
    const handleLoginClick = () => {
        console.log(`Logging in`);
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
            </Title>
            <Content>
                <Form className="login">
                    <FormItem>
                        <Button
                            className="login kakao"
                            onClick={handleLoginClick}
                            imageSrc="logo_kakao.png"
                        >
                            카카오톡 계정으로 로그인
                        </Button>
                    </FormItem>

                    <FormItem>
                        <Button
                            className="login google"
                            onClick={handleLoginClick}
                            imageSrc="logo_google.png"
                        >
                            구글 계정으로 로그인
                        </Button>
                    </FormItem>
                </Form>
            </Content>
        </Container>
    );
};

export default LoginPage;
