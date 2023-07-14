import React from 'react';
import {BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/home";
import Auth from "../pages/auth";
import Admin from "../pages/admin/admin";
import {privateAuth, publicRoute} from "../routs";

const AppRout = () => {
    const isLogin = true;
    return (
        <div>
            <Routes>
                {
                    isLogin && privateAuth.map(({path, Component})=><Route key={path} path={path} element={Component} exact/>)
                }
                {
                  publicRoute.map(({path, Component})=><Route key={path} path={path} element={Component} exact/>)
                }
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
};

export default AppRout;
