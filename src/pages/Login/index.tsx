import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LocalImage } from '../../common/atoms/Image';
import { Form, FormItem } from '../../common/atoms/Form';
import Button from '../../common/atoms/Button';
import { MainContainer } from '../../common/atoms/Container';
import './index.scss';

declare const window: Window & { Kakao: any; google: any };

const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_KEY}&redirect_uri=http://localhost:3000/login/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`;
const staticServerUri =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : process.env.REACT_APP_FRONT_URL;

const LoginPage = () => {
    useEffect(() => {
        if (window.Kakao) {
            const kakao = window.Kakao;
            if (!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
            }
        }
    }, []);

    const loginWithKakao = () => {
        window.Kakao.Auth.authorize({
            redirectUri: staticServerUri + '/login/kakao',
        });
    };

    const loginWithGoogle = () => {
        //link to google login page
        window.location.href = googleUrl;
    };

    return (
        <MainContainer className="column">
            <div className="logo">
                <Link to="/">
                    <LocalImage
                        src="logo_big.png"
                        width="200px"
                        height="auto"
                    />
                </Link>
            </div>
            <Form className="login">
                <FormItem>
                    <Button
                        className="kakao"
                        onClick={loginWithKakao}
                        imageSrc="logo_kakao.png"
                        imageStyle={{ width: '23px', height: '20px' }}
                    >
                        카카오톡 계정으로 로그인
                    </Button>
                </FormItem>

                <FormItem>
                    <Button
                        className="google"
                        onClick={loginWithGoogle}
                        imageSrc="logo_google.svg"
                    >
                        구글 계정으로 로그인
                    </Button>
                </FormItem>
            </Form>
        </MainContainer>
    );
};

export default LoginPage;
