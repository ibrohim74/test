import React, {useContext, useState} from 'react';
import {login} from "../http/userAPI";
import {ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";

const Login = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {user} = useContext(Context)

    const history = useNavigate();

    const click = async ()=>{
        try {
            await login(username, password);
            history(ADMIN_ROUTE);
            user.setIsAuth(true)
        }catch (e) {
            alert(e)
        }

    };

    return (
        <div style={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center", height:'100vh'}}>
            <input type="text" placeholder={'userName'} value={username} onChange={e=>setUsername(e.target.value)}/>
            <input type="password" placeholder={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>
            <button onClick={click}>send</button>
        </div>
    );
};

export default Login;
