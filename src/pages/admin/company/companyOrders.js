import React, {useEffect, useState} from 'react';

import {$authHost} from "../../../http";

const CompanyOrders = () => {
    const [orderList , setOrderList]= useState([]);


    const getOrderList = async () =>{
        try {
            const res =await $authHost.get('api/v1/orders/')
            return setOrderList(res.data)
        }catch (e) {
            console.log(e)
        }

    }
    const getUserInfo= async (id)=>{

    }
    useEffect(()=>{getOrderList()},[])

console.log(orderList)
    return (
        <div>
            <table>
                <thead>
                <th>Username</th>
                <th>telephone</th>
                <th>status</th>
                </thead>
                <tbody>
                {orderList.map( (item)=>{
                    return<>
                    <tr>
                        {item.user_id}
                    </tr>

                </>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyOrders;
