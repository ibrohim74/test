import React, {useContext, useEffect, useState} from 'react';

import {Routes, Route, Link} from "react-router-dom"
import {observer} from "mobx-react-lite";
import {$authHost, useTokenRefresh} from "../../http";
import {adminRoute, companyRoute, polyRoute, userRoute} from "../../routs";
import {QuestionCircleOutlined} from "@ant-design/icons";
import {
    EDIT_ALL_USER,
    ORDER_USER, ORDERS_MANAGER,
    PROFILE_ADMIN,
    PROFILE_COMPANY,
    PROFILE_USER,
    STATISTIC, USER_LIST
} from "../../utils/consts";
import {getUser_Profile, logOut} from "../../http/userAPI";
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Admin = observer(() => {
    const [currentUser, setCurrentUser] = useState([]);

    const token = useTokenRefresh();
    useEffect(() => {
        try {
            const getData = async () => {
                const res = await $authHost.get('api/v1/users/' + localStorage.getItem('uuid'));
                setCurrentUser([res.data])
            };
            if (token) {
                getData()
            }else {return  console.log('err')}
        }catch (e) {
            return window.location.assign('/')
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
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to={ORDER_USER}>
                                Order
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
                            <Link to={ORDERS_MANAGER}>
                                Order
                            </Link>
                        </li>
                    </ul>
                    }

                    <div className="footer-sidebar">
                        {/*<h3>Help && support </h3> <QuestionCircleOutlined/>*/}
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
