import { useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { authApi } from '../../service/user';

type Vendor = 'kakao' | 'google';
const RedirectPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const authCode = searchParams.get('code'); //인가코드
    const { vendor } = useParams<{ vendor: Vendor }>();
    useEffect(() => {
        console.log(authCode);
        // 백에게 api 요청 post /login/kakao {authCode}
        // 성공시 로그인됨, + 앨범리스트페이지로 리다이랙트
        // 실패시 에러페이지.
        if (authCode && vendor) {
            // authApi.oauthLogin({ vendor, authCode }).then(res => {
            //     // console.log(res);
            //     if (res.status === 200) {
            //         navigate('/album');
            //     }
            // });
        } else {
            navigate('/login');
        }
    }, [authCode]);

    return (
        <div>
            <h1>로그인 중...</h1>
        </div>
    );
};

export default RedirectPage;
