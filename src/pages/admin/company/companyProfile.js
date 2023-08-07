import React, {useEffect, useState} from 'react';
import {$authHost, useTokenRefresh} from "../../../http";
import {Form} from "react-bootstrap";
import {message} from "antd";

const CompanyProfile = () => {
    const [currentUser, setCurrentUser] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();

    const [sendProf, setSendProf] = useState({
        username:'',
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        phone:'',
        birthday:'',
        work_info:'',
        address:{
            city:'',
            street:'',
            region:'',
            country:''
        }
    });

    let dataIndex = {
        username: sendProf.username ? sendProf.username : currentUser.username,
        email: sendProf.email ? sendProf.email : currentUser.email,
        password: sendProf.password ? sendProf.password : currentUser.password,
        first_name: sendProf.first_name ? sendProf.first_name : currentUser.first_name,
        last_name: sendProf.last_name ? sendProf.last_name : currentUser.last_name,
        phone: sendProf.phone ? sendProf.phone : currentUser.phone,
        birthday: sendProf.birthday ? sendProf.birthday : currentUser.birthday,
        work_info: sendProf.work_info ? sendProf.work_info : currentUser.work_info,
        address: {
            city: sendProf.address ? sendProf.address.city : currentUser.address.city,
            street: sendProf.address ? sendProf.address.street : currentUser.address.street,
            region: sendProf.address ? sendProf.address.region : currentUser.address.region,
            country: sendProf.address ? sendProf.address.country : currentUser.address.country
        }
    }

    useEffect(() => {
        const getData = async () => {
            const res = await $authHost.get('api/v1/users/' + localStorage.getItem('uuid'));
            setCurrentUser(res.data)
        };
        getData()
    }, []);

    const handleSend = async ()=>{
        try {
            const res = await $authHost.put('api/v1/users/' + localStorage.getItem('uuid')+'/',
                dataIndex
            );
            messageApi.open({
                type: 'success',
                content: res.data.username +" update",
            })
            setTimeout(()=>{
                return window.location.reload()
            },3000)
        }catch (e) {
            messageApi.open({
                type: 'error',
                content: e.message,
            })
        }
    }
    return (
        <div key={currentUser.id}>
            {contextHolder}
                <p>{currentUser.username}</p>
                <input type="text"
                       placeholder='username'
                       onChange={e => setSendProf({...sendProf , username:e.target.value})}
                />
            <p>{currentUser.email}</p>
                <input type="text"
                       placeholder='email'
                    // value={sendProf.email}
                       onChange={e => setSendProf({...sendProf ,email:e.target.value})}
                />
            <input type="text"
                       placeholder='password'
                    // value={sendProf.password}
                       onChange={e => setSendProf({...sendProf ,password:e.target.value})}
                />
            <p>{currentUser.first_name}</p>

            <input type="text"
                       placeholder='first_name'
                    // value={sendProf.first_name}
                       onChange={e => setSendProf({...sendProf ,first_name:e.target.value})}
                />

            <p>{currentUser.last_name}</p>

            <input type="text"
                       placeholder='last_name'
                    // value={sendProf.last_name}
                       onChange={e => setSendProf({...sendProf ,last_name:e.target.value})}
                />

            <p>{currentUser.phone}</p>

            <input type="text"
                       placeholder='phone'
                    // value={sendProf.phone}
                       onChange={e => setSendProf({...sendProf ,phone:e.target.value})}
                />

            <p>{currentUser.birthday}</p>

            <input type="date"
                       placeholder='birthday'
                    // value={sendProf.birthday}
                       onChange={e => setSendProf({...sendProf ,birthday:e.target.value})}
                />
            <p>{currentUser.work_info}</p>

            <input type="text"
                       placeholder='work_info'
                    // value={sendProf.work_info}
                       onChange={e => setSendProf({...sendProf ,work_info:e.target.value})}
                />
            <input
                type="text"
                placeholder="city"
                onChange={(e) => {
                    setSendProf({...sendProf , address:{...sendProf.address , city:e.target.value}});
                }}
            />


            <input
                type="text"
                placeholder="street"
                onChange={(e) => {
                    setSendProf({...sendProf , address:{...sendProf.address , street:e.target.value}});
                }}
            />


            <input
                type="text"
                placeholder="region"
                onChange={(e) => {
                    setSendProf({...sendProf , address:{...sendProf.address , region:e.target.value}});
                }}
            />


            <input
                type="text"
                placeholder="country"
                onChange={(e) => {
                    setSendProf({...sendProf , address:{...sendProf.address , country:e.target.value}});
                }}
            />
                <button onClick={handleSend}>send</button>
        </div>
    );
};

export default CompanyProfile;
