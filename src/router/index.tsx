import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Layout from '../common/templates/Layout';
import LandingPage from '../pages/Landing';
import AccountPage from '../pages/Account';
import CanvasEditPage from '../pages/Canvas';
import AlbumCreationPage from '../pages/Album/Create/AlbumCreate';
import AlbumGroupPage from '../pages/Album/Group';
import ChallengePage from '../pages/Challenge';
import AlbumViewPage from '../pages/Album/View';
import RedirectPage from '../pages/Login/redirect';
import ErrorPage from '../pages/Common/Error';
import PrivateRoute from './private';
import AlbumInvitePage from '../pages/Album/Invite';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user';
import { useEffect, useState } from 'react';
import { userApi } from '../service/user';
import Loader from '../common/atoms/Loader';

const Router = () => {
    const setUser = useSetRecoilState(userState);
    const [isInit, setIsInit] = useState(false);

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
        setIsInit(true);
    };

    useEffect(() => {
        initializeUserInfo();
    }, []);

    if (!isInit) return <Loader />;

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
                            <Route
                                path="view/:albumId"
                                element={<AlbumViewPage />}
                            />
                            <Route
                                path="invite"
                                element={<AlbumInvitePage />}
                            />

                            <Route
                                path=":albumId/page/:pageId"
                                element={<CanvasEditPage />}
                            />
                        </Route>
                    </Route>
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="error" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
