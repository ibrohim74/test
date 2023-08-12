import React, {useEffect, useState} from 'react';
import {$authHost} from "../../../http";
import {Table} from "react-bootstrap";

const PolyGetAll = () => {
    const [dataOrder , setDataOrder] = useState()

    const getOrderList =async () =>{
        try {
            const res = await $authHost.get('api/v1/orders/');
            setDataOrder(res.data)
        }catch (e) {
console.log(e)
        }
    }
    useEffect(()=>{
        getOrderList()
    },[])


    return (
        <>
            <Table>
                <thead>
                <th>
                    Username
                </th>
                <th>created</th>
                <th></th>
                </thead>
            </Table>
        </>
    );
};

export default PolyGetAll;
