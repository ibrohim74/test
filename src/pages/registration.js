import React, {useContext, useState} from 'react';
import {login, registration} from "../http/userAPI";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";

const Registration = () => {
    const {user} = useContext(Context);
    const history = useNavigate();
    const [regData , setRegData] = useState([
        {username:'',
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            phone:'' ,
            birthday:'',
            work_info:'',
            address:''
            }
    ]);
    console.log(regData)
    const click = async () => {
        try {

                await registration(regData.username, regData.email, regData.password ,
                    regData.first_name , regData.last_name , regData.phone , regData.birthday ,
                    regData.work_info , regData.address);
            history(LOGIN_ROUTE);
        } catch (e) {
            alert(e)
        }

    };

    return (
        <div style={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center", height:'100vh'}}>
            <input type="email" placeholder={"email"} value={regData.email} onChange={e=>{
                setRegData({...regData,email:e.target.value})
            }}/>
            <input type="text" placeholder={"username"}
                   value={regData.username}
                   onChange={e=>{
                setRegData({...regData,username:e.target.value})
            }}
            />
            <input type="password" placeholder={"password"}
                   value={regData.password}
                   onChange={e=>{
                setRegData({...regData,password:e.target.value})
            }}
            />
            <input type="text" placeholder={"first_name"}
                   value={regData.first_name}
                   onChange={e=>{
                       setRegData({...regData,first_name:e.target.value})
                   }}
            />
            <input type="text" placeholder={"last_name"}
                   value={regData.last_name}
                   onChange={e=>{
                       setRegData({...regData,last_name:e.target.value})
                   }}
            />
            <input type="tel" placeholder={"phone"}
                   value={regData.phone}
                   onChange={e=>{
                       setRegData({...regData,phone:e.target.value})
                   }}
            />
            <input type="date" placeholder={"birthday"}
                   value={regData.birthday}
                   onChange={e=>{
                       setRegData({...regData,birthday:e.target.value})
                   }}
            />
            <input type="text" placeholder={"work_info"}
                   value={regData.work_info}
                   onChange={e=>{
                       setRegData({...regData,work_info:e.target.value})
                   }}
            />
            <input type="text" placeholder={"address"}
                   value={regData.address}
                   onChange={e=>{
                       setRegData({...regData,address:e.target.value})
                   }}
            />
            <button onClick={click}>send</button>
        </div>
    );
};

export default Registration;
