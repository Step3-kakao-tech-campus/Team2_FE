import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';
import VerifyPage from './pages/user/VerifyPage';
import SignupPage from './pages/user/SignupPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="verify" element={<VerifyPage />} />
            <Route path="signup" element={<SignupPage />} />
        </Routes>
    </>
);

export default Router;
