import React, {useEffect, useState} from 'react';
import {$authHost} from "../../../http";
import {Button} from "react-bootstrap";

const UserOrder = () => {
    const [user , setUser] = useState()
    const [status , setStatus] = useState(false)

    const getOrder = async ()=>{
        try {
            const res = await $authHost.get('api/v1/order/'+localStorage.getItem('uuid'))
            setUser(res.data)
            setStatus(true)
            console.log(res)
        }catch (e) {
            console.log(e)
            setStatus(false)
     }
console.log(user)
    }
const userNotFound = async ()=>{
        try {
            const res = await $authHost.post('api/v1/orders/',{user_id:localStorage.getItem('uuid')} )
            console.log(res)
        }catch (e) {
            console.log(e)
        }

}
    useEffect(()=>{
        getOrder()
    },[])
    const orderUser =()=>{

    }
    return (
        <div>
            WORKING ON IT
            {user ? <>redy</> : <>
                create order <Button onClick={userNotFound}>create</Button>
            </> }
        </div>
    );
};

export default UserOrder;
