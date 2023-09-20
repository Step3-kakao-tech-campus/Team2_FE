import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Layout from './common/templates/Layout';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
