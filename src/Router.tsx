import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import Layout from './common/templates/Layout';
import LandingPage from './pages/Landing';
import AccountPage from './pages/Account';
import Canvas from './pages/Canvas';
import AlbumCreationPage from './pages/Album/Create/AlbumCreate';
import AlbumGroupPage from './pages/Album/Group';
import ScannerPage from './pages/QrScan';

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
            <Route path="login" element={<LoginPage />} />
            <Route path="canvas" element={<Canvas />} />
            <Route path="scanner" element={<ScannerPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
