import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Layout from './common/templates/Layout';
import LandingPage from './pages/Landing';
import AccountPage from './pages/Account';
import Canvas from './pages/Canvas';
import AlbumCreationPage from './pages/Album/Create/AlbumCreate';
import AlbumGroupPage from './pages/Album/Group';
import ScannerPage from './pages/QrScan';
import ChallengePage from './pages/Challenge';
import AlbumViewPage from './pages/Album/View';
import RedirectPage from './pages/Login/redirect';
import ErrorPage from './pages/Common/Error';
import Flip from './pages/Flip';
import AlbumInvitePage from './pages/Album/Invite';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="challenge" element={<ChallengePage />} />
                <Route path="album">
                    <Route index element={<AlbumGroupPage />} />
                    <Route path="create" element={<AlbumCreationPage />} />
                    <Route path="view" element={<AlbumViewPage />} />
                    <Route path="invite" element={<AlbumInvitePage />} />
                </Route>
            </Route>
            <Route path="login">
                <Route index element={<LoginPage />} />
                <Route path=":vendor" element={<RedirectPage />} />
            </Route>
            <Route path="flip" element={<Flip />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="canvas" element={<Canvas />} />
            <Route path="scanner" element={<ScannerPage />} />
            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
