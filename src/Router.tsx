import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';
import VerificationPage from './pages/user/VerificationPage';
import SignupPage from './pages/user/SignupPage';
import FindUsernameVerifyPage from './pages/user/FindUsernameVerifyPage';
import FindUsernameResultPage from './pages/user/FindUsernameResult';
import FindPasswordVerifyPage from './pages/user/FindPasswordVerifyPage';
import ResetPasswordPage from './pages/user/ResetPasswordPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup/verify" element={<VerificationPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="find-username" element={<FindUsernameVerifyPage />} />
            <Route
                path="find-username-result"
                element={<FindUsernameResultPage />}
            />
            <Route path="find-password" element={<FindPasswordVerifyPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
        </Routes>
    </>
);

export default Router;
