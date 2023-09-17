import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';
import VerifyPage from './pages/user/VerifyPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="verify" element={<VerifyPage />} />
        </Routes>
    </>
);

export default Router;
