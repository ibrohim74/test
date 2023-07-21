import React, {useState} from 'react';
import "../../../assets/saidbar.css"
import {QuestionCircleOutlined} from "@ant-design/icons"
import {Link} from "react-router-dom";
import jwtDecode from "jwt-decode";
const Sidebar = ({items, onClickItem}) => {
    const [active, setActive] = useState(false);

    const user = ()=>{

    }
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
