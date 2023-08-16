import React, {useEffect, useState} from 'react';
import {QuestionCircleOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom";
import jwtDecode from "jwt-decode";
const Sidebar = ({type}) => {
    return (
        <div className='sidebar'>
            <div className="logo-sidebar"><h1>Logo</h1></div>
            <ul>

                <li>
                    <Link to={"/admin/priv"}>
                        Profile
                    </Link>
                </li>

            </ul>
            <div className="footer-sidebar">
                <h3>Help && support </h3> <QuestionCircleOutlined/>
            </div>
        </div>
    );
};

export default Sidebar;