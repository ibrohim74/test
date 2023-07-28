import axios from "axios";
import {useEffect, useState} from "react";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

$authHost.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

const useTokenRefresh = () => {
    const [accessToken, setAccessToken] = useState(null);
    let intervalRef = null;
    const getAccessToken = () => {
        const token = localStorage.getItem('token');
        setAccessToken(token);
        return token;
    };


    const refreshToken = async () => {
        try {
            const {data} = await $authHost.post('/api/token/refresh', {
                refresh: localStorage.getItem('refreshToken'),
            });
            const newAccessToken = data.access;
            console.log(data.access);
            setAccessToken(newAccessToken);
            localStorage.setItem('token', newAccessToken);
            console.log("oxshadi")
            return newAccessToken;
        } catch (error) {
            console.error('Token yangilashda xatolik yuz berdi:', error);
            return null;
        }
    }

    useEffect(() => {
        const token = getAccessToken();
        if (!token) {
            return;
        }

        intervalRef = setInterval(() => {
            refreshToken();
        }, 6*3600*1000);

        return () =>{ clearInterval(intervalRef)};
    }, []);

    return accessToken;
};

export {
    $host,
    $authHost,
    useTokenRefresh
}


