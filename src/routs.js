import React from "react";
import {
    ABOUT_ROUTE, ADMIN_LAYOUT_ROUTE,
    ADMIN_ROUTE, ADVANTAGES_ROUTE, HIW_ROUTE, HOME_ROUTE, LOGIN_ROUTE,
    PRIVATE_ROUTE1,
    PRIVATE_ROUTE2,
    PRIVATE_ROUTE3,
    PRIVATE_ROUTE4,
    PRIVATE_ROUTE5, PRIVATE_ROUTE6, REGISTRATION_ROUTE, USER_ROUTE, USERCONTACTPAGE
} from "./utils/consts";
import Admin from "./pages/admin/admin";
import Priv1 from "./pages/admin/priv1";
import Priv2 from "./pages/admin/priv2";
import Priv3 from "./pages/admin/priv3";
import Priv4 from "./pages/admin/priv4";
import Priv5 from "./pages/admin/priv5";
import Priv6 from "./pages/admin/priv6";
import Home from "./pages/home";

import Auth from "./pages/auth";

import Layout from "./pages/admin/component/layout";
import UserPageContact from "./pages/userPageContact";


export const adminDash = [
    {
        path:ADMIN_ROUTE,
        Component:<Admin/>
    },
    {
        path:"/layout",
        Component:<Layout/>
    },
    {
        path:PRIVATE_ROUTE1,
        Component:<Priv1/>

    }  ,
    {
        path:PRIVATE_ROUTE2,
        Component:<Priv2/>
    }  ,
    {
        path:PRIVATE_ROUTE3,
        Component:<Priv3/>
    }  ,
    {
        path:PRIVATE_ROUTE4,
        Component:<Priv4/>
    }  ,
    {
        path:PRIVATE_ROUTE5,
        Component:<Priv5/>
    }  ,
    {
        path:PRIVATE_ROUTE6,
        Component:<Priv6/>
    }  ,
];
export const publicRoute = [
    {
        path:HOME_ROUTE,
        Component:<Home/>
    }  ,

    {
        path:LOGIN_ROUTE,
        Component:<Auth/>
    }  ,
    {
        path:REGISTRATION_ROUTE,
        Component:<Auth/>
    }  ,
];
