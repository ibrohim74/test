import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";
import Admin from "../pages/admin/admin";



export const registration = async (username, email, password, first_name, last_name, phone, birthday, work_info, address) => {
    const response = await $host.post('register', {
        username,
        email,
        password,
        first_name,
        last_name,
        phone,
        birthday,
        work_info,
        address
    });

}

export const login = async (username, password) => {
    const {data} = await $host.post('login', {username, password});
    localStorage.setItem('token', data.tokens.access);
    localStorage.setItem('refreshToken', data.tokens.refresh);
    localStorage.setItem('uuid', data.user.id);
    return jwt_decode(data.tokens.access)
};

export const check = async () => {
    const refresh = localStorage.getItem('refreshToken');
    const {data} = await $authHost.post('api/token/refresh', {refresh});
    return jwt_decode(data.access);
};

export const getUser_Profile= async () => {
    const response = await $authHost.get('api/users/' + localStorage.getItem('uuid'));
    return response
};
export const logOut = async ()=>{
    const refresh = localStorage.getItem('refreshToken');
    const {data} = await $authHost.post('/logout', {refresh});
    localStorage.clear()
    return window.location.assign('/')
};

