import React from 'react';
import {ADMIN_ROUTE, PRIVATE_ROUTE1} from "../../../utils/consts";
import {Menu} from "antd";
import {NavLink,Routes,Route} from "react-router-dom";
import Admin from "../admin";
import Priv1 from "../priv1";

const Layout = ({ items, onClickItem }) => {
    return (
        <div>
            <div className='sidebar'>
                {items.map((item, index) => (
                    <button key={index} onClick={() => onClickItem(index)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Layout;
