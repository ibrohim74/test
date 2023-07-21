import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import Sidebar from "./component/sidebar";
import Priv1 from "./priv1";
import Priv2 from "./priv2";
import Priv3 from "./priv3";
import Priv4 from "./priv4";
import { UserOutlined ,DashboardTwoTone,ShoppingTwoTone,EnvironmentTwoTone,DollarTwoTone,SettingTwoTone} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import jwt_decode from "jwt-decode";
import {useNavigate,Routes , Route} from "react-router-dom"

const Admin = () => {
    const {user} = useContext(Context);
    const navi = useNavigate();
const logout = ()=>{
        navi('/');
    user.setUser({});
    user.setIsAuth(false);
    localStorage.clear()
}
    const getName = ()=> {
        const token = localStorage.getItem('token');
        const deToken = jwt_decode(token)
        return "Welcome "+ deToken.email +" "+ deToken.role
    }


    const [selectedItem, setSelectedItem] = useState(null);
    const elementsSidebar = [
        {icon:<DashboardTwoTone /> , item:'Dashboard'},
        {icon:<ShoppingTwoTone /> , item:'Order'},
        {icon:<EnvironmentTwoTone /> , item:'Addresses'},
        {icon:<DollarTwoTone /> , item:'Payment method'},
        {icon:<SettingTwoTone />, item:'Settings'}
        ];

    const layouts = [<Priv1 />, <Priv2 />, <Priv3 />, <Priv4 />];
    return (
        <div className={"adminPage"}>
            <div className="said-bar">
                <Sidebar items={elementsSidebar} onClickItem={setSelectedItem} />
            </div>
            <div className="header">
                <button onClick={()=>logout()}>Logout</button>
                {getName()}
            </div>
            <div className="content-adminPage">
                {/*{selectedItem !== null && layouts[selectedItem]}*/}
                <Routes>
                    <Route element={<Priv1/>} path={'/priv'} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
