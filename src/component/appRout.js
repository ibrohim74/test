import React, {useContext} from 'react';
import { Routes, Route,Navigate} from "react-router-dom";
import {Context} from "../index";
import {adminDash, publicRoute} from "../routs";
import {observer} from "mobx-react-lite";
import UserPageContact from "../pages/userPageContact";
import {data} from "./db";


const AppRout = observer(() => {
        const {user} = useContext(Context);
        const local = localStorage.getItem('token');
        return (
            <Routes>

                {
                    publicRoute.map(({path, Component}) => <Route key={path} path={path} element={Component} exact/>)
                }
                { local && adminDash.map(({path, Component}) => <Route key={path} path={path + "/*"} element={Component}/>)}


                    <Route  exact path={`/:username`} element={<UserPageContact/>} />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        );
    });

    export default AppRout;
