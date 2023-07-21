import React from 'react';
import {adminDash, privateAuth, publicRoute} from "../../../routs";
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import {PRIVATE_ROUTE1} from "../../../utils/consts";
import {Menu} from "antd";
import Admin from "../admin";
import Priv1 from "../priv1";

const AdminRout = () => {
    return (
        <>
            <Admin/>
adminRout
            <Routes>
                {/*<Route path={PRIVATE_ROUTE1} element={<Priv1/>}/>*/}
            </Routes>
            </>
    );
};

export default AdminRout;
