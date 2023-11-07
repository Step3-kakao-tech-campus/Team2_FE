import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Layout from '../common/templates/Layout';
import LandingPage from '../pages/Landing';
import AccountPage from '../pages/Account';
import Canvas from '../pages/Canvas';
import AlbumCreationPage from '../pages/Album/Create/AlbumCreate';
import AlbumGroupPage from '../pages/Album/Group';
import ScannerPage from '../pages/QrScan';
import ChallengePage from '../pages/Challenge';
import AlbumViewPage from '../pages/Album/View';
import RedirectPage from '../pages/Login/redirect';
import ErrorPage from '../pages/Common/Error';
import PrivateRoute from './private';
import AlbumInvitePage from '../pages/Album/Invite';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user';
import { useEffect } from 'react';
import { userApi } from '../service/user';

const Router = () => {
    const setUser = useSetRecoilState(userState);

    const initializeUserInfo = async () => {
        const token = await localStorage.getItem('accessToken');
        if (token) {
            try {
                const userData = await userApi.getUserInfo();
                setUser(userData);
            } catch (e) {
                console.log(e);
            }
            //이부분 질문 에러 발생시 아무처리안할때 넘기는 방법
        }
    };

    useEffect(() => {
        initializeUserInfo();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<LandingPage />} />
                    <Route path="login">
                        <Route index element={<LoginPage />} />
                        <Route path=":vendor" element={<RedirectPage />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="account" element={<AccountPage />} />
                        <Route path="challenge" element={<ChallengePage />} />
                        <Route path="album">
                            <Route index element={<AlbumGroupPage />} />
                            <Route
                                path="create"
                                element={<AlbumCreationPage />}
                            />
                            <Route path="view" element={<AlbumViewPage />} />
                            <Route
                                path="invite"
                                element={<AlbumInvitePage />}
                            />
                        </Route>
                    </Route>
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="canvas" element={<Canvas />} />
                <Route path="scanner" element={<ScannerPage />} />
                <Route path="error" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
