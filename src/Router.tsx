import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/loginPage/LoginPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </>
);

export default Router;
