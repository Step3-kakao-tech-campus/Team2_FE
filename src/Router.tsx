import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';

const Router = () => (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </>
);

export default Router;
