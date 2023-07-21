import React from 'react';
import {Link} from "react-router-dom";
import {ADMIN_ROUTE, PRIVATE_ROUTE1} from "../utils/consts";

const Home = () => {
    return (
        <div>
            HOME
            <Link to={ADMIN_ROUTE}>priv</Link>
        </div>
    );
};

export default Home;
