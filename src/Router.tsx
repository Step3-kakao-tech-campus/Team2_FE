import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Layout from './common/templates/Layout';
import LandingPage from './pages/Landing';
import AccountPage from './pages/Account';
import Canvas from './pages/Canvas';
import AlbumCreationPage from './pages/AlbumCreate/AlbumCreate';
import AlbumGroupPage from './pages/AlbumGroup';
import ScannerPage from './pages/QrScan';
import RedirectPage from './pages/Login/redirect';
import ErrorPage from './pages/Common/Error';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="account" element={<AccountPage />} />
                <Route path="album">
                    <Route index element={<AlbumGroupPage />} />
                    <Route path="create" element={<AlbumCreationPage />} />
                </Route>
            </Route>
            <Route path="login">
                <Route index element={<LoginPage />} />
                <Route path=":vendor" element={<RedirectPage />} />
            </Route>

            <Route path="canvas" element={<Canvas />} />
            <Route path="scanner" element={<ScannerPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
