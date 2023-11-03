import { LocalImage } from '../../common/atoms/Image';
import { MainContainer } from '../../common/atoms/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/atoms/Button';

const ErrorPage = () => {
    const navigate = useNavigate();
    const errors = useLocation().state;
    const errorCode: number = errors?.errorCode;
    const errorMsg: string = errors?.errorMsg;
    const unAuthorized = errorCode === 401;

    const btnText = unAuthorized
        ? '로그인페이지로 이동하기'
        : '메인페이지로 돌아가기';
    const handleClick = () => {
        const path: string = unAuthorized ? '/login' : '/';
        navigate(path);
    };

    return (
        <MainContainer className="column" style={{ paddingBottom: '70px' }}>
            <div className="logo">
                <LocalImage
                    src={'errorlogo1.png'}
                    width="140px"
                    height="auto"
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <h1>{errorCode ?? 404} Error</h1>
                <h4>{errorMsg ?? '찾을 수 없는 페이지 입니다'}</h4>
                <Button
                    style={{ fontWeight: 'bold', marginTop: '40px' }}
                    onClick={handleClick}
                >
                    {btnText}
                </Button>
            </div>
        </MainContainer>
    );
};

export default ErrorPage;
