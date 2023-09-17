import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';
import VerifyPage from './pages/user/VerifyPage';
import SignupPage from './pages/user/SignupPage';
import FindPasswordVerifyPage from './pages/user/FindPasswordVerifyPage';
import ResetPasswordPage from './pages/user/ResetPasswordPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="verify" element={<VerifyPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="find-username" element={<SignupPage />} />
            <Route path="find-password" element={<FindPasswordVerifyPage />} />
            <Route path="find-username-result" element={<SignupPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
        </Routes>
    </>
);

export default Router;
