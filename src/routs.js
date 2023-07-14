import {
    ABOUT_ROUTE,
    ADMIN_ROUTE, ADVANTAGES_ROUTE, HIW_ROUTE, HOME_ROUTE, LOGIN_ROUTE,
    PRIVATE_ROUTE1,
    PRIVATE_ROUTE2,
    PRIVATE_ROUTE3,
    PRIVATE_ROUTE4,
    PRIVATE_ROUTE5, PRIVATE_ROUTE6, REGISTRATION_ROUTE, USER_ROUTE
} from "./utils/consts";
import Admin from "./pages/admin/admin";
import Priv1 from "./pages/admin/priv1";
import Priv2 from "./pages/admin/priv2";
import Priv3 from "./pages/admin/priv3";
import Priv4 from "./pages/admin/priv4";
import Priv5 from "./pages/admin/priv5";
import Priv6 from "./pages/admin/priv6";
import Home from "./pages/home";
import About from "./pages/about";
import Auth from "./pages/auth";
import Hiw from "./pages/hiw";
import Advantages from "./pages/advantages";

export const privateAuth  = [
    {
        path:ADMIN_ROUTE,
        Component:<Admin/>
    },
    {
        path:USER_ROUTE,
        Component:<Admin/>
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
        path:ABOUT_ROUTE,
        Component:<About/>
    }  ,
    {
        path:LOGIN_ROUTE,
        Component:<Auth/>
    }  ,
    {
        path:REGISTRATION_ROUTE,
        Component:<Auth/>
    }  ,
    {
        path:HIW_ROUTE,
        Component:<Hiw/>
    }  ,
    {
        path:ADVANTAGES_ROUTE,
        Component:<Advantages/>
    }  ,
];
