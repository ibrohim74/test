import React, {useContext, useEffect, useState} from 'react';
import {$authHost, $host} from "../../../http";
import {Button} from "react-bootstrap";
import {observer} from 'mobx-react-lite';
import {useUser} from "../../../constructor/UserContext";
import CryptoJS from 'crypto-js';
import {Steps, Modal, Input, message} from "antd";


const UserOrder = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const [stepCurrent, setStepCurrent] = useState(0)
    const user = useUser();
    const [password, setPassword] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const getOrder = async () => {
        try {
            const res = await $authHost.get('api/v1/users/' + localStorage.getItem('uuid') + '/')
        } catch (e) {
            console.log(e)

        }
    }
    const decryptedUserData = CryptoJS.AES.decrypt(
        localStorage.getItem('user'),
        'nfcGlobal'
    ).toString(CryptoJS.enc.Utf8);
    const userDataLogin = JSON.parse(decryptedUserData);

    const userNotFound = async () => {
        if (password.password === '' || password.password === undefined) {
            messageApi.open({
                type: 'error',
                content: 'Password',
            })
        } else {
            try {
                const {data} = await $host.post('api/v1/login', {
                    username: userDataLogin.username,
                    password: password.password
                });
                const encryptedUserData = CryptoJS.AES.encrypt(
                    JSON.stringify(data.user),
                    'nfcGlobal'
                ).toString();
                localStorage.setItem('user', encryptedUserData);
                const res = await $authHost.post('api/v1/orders/', {user_id: localStorage.getItem('uuid')})
                messageApi.open({
                    type: 'success',
                    content: 'success',
                })

                window.location.reload()
            } catch (e) {
                const {data} = await $host.post('api/v1/login', {
                    username: userDataLogin.username,
                    password: password.password
                });
                const encryptedUserData = CryptoJS.AES.encrypt(
                    JSON.stringify(data.user),
                    'nfcGlobal'
                ).toString();
                localStorage.setItem('user', encryptedUserData);
                messageApi.open({
                    type: 'error',
                    content: e.response.data.message,
                })
                console.log(e)
            }
        }
    }
    console.log(userDataLogin)



    const stepsCurr = () => {
        if (userDataLogin.orders[0]) {
            setStepCurrent(userDataLogin.orders[0].status)
            switch (userDataLogin.orders[0].status) {
                case 'NEW':
                    setStepCurrent(1)
                    break;
                case 'IN PROCESS':
                    setStepCurrent(2)
                    break;
                case 'READY':
                    setStepCurrent(3)
                    break;
                default:
                    setStepCurrent(0)
            }
        }
    }
    useEffect(() => {
        getOrder()
        stepsCurr()
    }, [])
    return (
        <>
            {contextHolder}
            create order <Button type="primary" onClick={showModal}>
            Create
        </Button>

            <Steps
                current={stepCurrent}
                items={[
                    {
                        title: 'NO',
                    },
                    {
                        title: 'NEW',
                    },
                    {
                        title: 'In Progress',
                    },
                    {
                        title: 'Ready',
                    },
                ]}
            />


            <Modal title="Confirm" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="password"
                       required
                       onChange={e => {
                           setPassword({...password, password: e.target.value})
                       }}/>
                <Button onClick={userNotFound}>Confirm</Button>
            </Modal>

        </>
    );
};

export default UserOrder;