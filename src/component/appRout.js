import React, {useContext} from 'react';
import { Routes, Route} from "react-router-dom";
import {Context} from "../index";
import {adminDash, publicRoute} from "../routs";
import {observer} from "mobx-react-lite";



    const AppRout = observer(() => {
        const {user} = useContext(Context);

        return (
            <Routes>

                {
                    publicRoute.map(({path, Component}) => <Route key={path} path={path} element={Component} exact/>)
                }
                {user.isAuth && adminDash.map(({path, Component}) => <Route key={path} path={path + "/*"} element={Component}/>)}


                {/*<Route*/}
                {/*    path="*"*/}
                {/*    element={<Navigate to="/" replace />}*/}
                {/*/>*/}
            </Routes>
        );
    });

    export default AppRout;
