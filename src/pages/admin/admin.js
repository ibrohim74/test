import React, {useContext, useEffect, useState} from 'react';
import Sidebar from "./sidebar";

import {Routes, Route, Link} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {$authHost, useTokenRefresh} from "../../http";
import {Context} from "../../index";
import {adminRoute, companyRoute, polyRoute, userRoute} from "../../routs";
import {QuestionCircleOutlined} from "@ant-design/icons";
import {
    COMPANY_DEVISE, DEVISE_POLY,
    DEVISE_USER,
    EDIT_ALL_USER,
    ORDER_USER, ORDERS_MANAGER,
    PROFILE_ADMIN,
    PROFILE_COMPANY,
    PROFILE_USER,
    STATISTIC, USER_LIST
} from "../../utils/consts";
import {getUser_Profile, logOut} from "../../http/userAPI";

const Admin = observer(() => {
    const {user} = useContext(Context);
    const [currentUser, setCurrentUser] = useState([]);
    const [type, setType] = useState('');

    const token = useTokenRefresh();
    useEffect(() => {
        const getData = async () => {
            const res = await $authHost.get('api/v1/users/' + localStorage.getItem('uuid'));
            setCurrentUser([res.data])
            console.log(res)
        };
        if (token) {
            getData()
        }

    }, [token]);
    const typeUser = () => {
        if (currentUser.length === 0) {
            return "";
        }

        return currentUser[0].type;
    };
    useEffect(() => {
        typeUser()
    }, [])
    return (
        <div className={"adminPage"}>
            <div className="said-bar">
                <div className='sidebar'>
                    <div className="logo-sidebar"><h1>Logo</h1></div>

                    {typeUser() === 'REGULAR' &&
                    <ul>
                        <li>
                            <Link to={PROFILE_USER}>
                                U_Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={ORDER_USER}>
                                U_Order
                            </Link>
                        </li>
                    </ul>
                    }
                    {typeUser() === 'ADMIN' &&
                    (<ul>
                        <li>
                        <Link to={PROFILE_ADMIN}>
                            Profile
                        </Link>
                    </li>
                        <li>
                            <Link to={STATISTIC}>
                                Statistic
                            </Link>
                        </li>

                        <li>
                            <Link to={EDIT_ALL_USER}>
                                Edit
                            </Link>
                        </li>
                    </ul>)}
                    {typeUser() === 'COMPANY' &&
                    <ul>
                        <li>
                            <Link to={PROFILE_COMPANY}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={USER_LIST}>
                                User list
                            </Link>
                        </li>
                        <li>
                            <Link to={ORDERS_MANAGER}>
                                Order
                            </Link>
                        </li>

                    </ul>
                    }
                    {typeUser() === 'POLYGRAPHY' &&
                    <ul>
                        <li>

                        </li>
                    </ul>
                    }

                    <div className="footer-sidebar">
                        <h3>Help && support </h3> <QuestionCircleOutlined/>
                    </div>
                </div>
            </div>
            <div className="header">
                <button onClick={logOut}>Logout</button>

            </div>
            <div className="content-adminPage">
                <Routes>
                    {typeUser() === 'REGULAR' && userRoute.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component} exact/>
                    )}
                    {typeUser() === 'ADMIN' && adminRoute.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component} exact/>
                    )}
                    {typeUser() === 'COMPANY' && companyRoute.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component} exact/>
                    )}
                    {typeUser() === 'REGULAR' && polyRoute.map(({path, Component}) =>
                        <Route key={path} path={path} element={Component} exact/>
                    )}

                </Routes>
            </div>
        </div>
    );
});

export default Admin;
