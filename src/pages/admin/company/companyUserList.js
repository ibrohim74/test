import React, {useEffect, useRef, useState} from 'react';
import {$authHost} from "../../../http";
import {message, Popconfirm, Button, Modal, Input,DatePicker} from 'antd';

const DeleteUser = async (e, username) => {
    try {
        $authHost.delete('api/v1/users/' + e)
        message.success(`${username} deleted`);
        return window.location.reload()
    } catch (error) {
        alert(error)
    }
};
const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

const CompanyUserList = () => {
    const [updateOpen, setUpdateOpen] = useState(false);
    const [data, setData] = useState([]);
    const [createUser, setCreateUser] = useState({
        birthday:'',
        address:{
            street: '',
            region:'',
            city:'',
            country:''
        },
        created_by:localStorage.getItem('uuid')
    });
    const [updateUser, setUpdateUser] = useState({
        birthday:'',
        address:{
            street: '',
            region:'',
            city:'',
            country:''
        },
        created_by_id:localStorage.getItem('uuid')
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
console.log(data)
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModalUpdate = () => {
        setUpdateOpen(true);
    };
    const handleOkUpdate = () => {
        setUpdateOpen(false);
    };
    const handleCancelUpdate = () => {
        setUpdateOpen(false);
    };
    const birthdayChange = (date, dateString) => {
        setCreateUser({...createUser , birthday: dateString})
    };
    const birthdayUpdate = (date, dateString) => {
        setUpdateUser({...updateUser , birthday: dateString})
    };


    const sendNewUser = async ()=> {
        try {
            const res = await $authHost.post("api/v1/users/", createUser)
            messageApi.open({
                type: 'success',
                content: res.data.username +" created",
            })
            setTimeout(()=>{
                return window.location.reload()

            },2000)
        }catch (e) {
            messageApi.open({
                type: 'error',
                content: e.message,
            })
            console.log(e)
        }
    }
    const sendUpdate = async (id)=> {
        try {
            const res = await $authHost.put("api/v1/users/"+id+"/", updateUser)
            messageApi.open({
                type: 'success',
                content: res.data.username +" update",
            })
            setTimeout(()=>{
                return window.location.reload()

            },2000)
        }catch (e) {
            messageApi.open({
                type: 'error',
                content: e.message,
            })
            console.log(e)
        }
    }
    const userList = async () => {
        const res = await $authHost.get('api/v1/users/')
        setData(res.data.map(row => ({
            id: row.id,
            username: row.username,
            phone: row.phone,
            work_info: row.work_info
        })))
    }
    const tableUser = data.map((item) => {
        return <>

            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.work_info}</td>
                <td>
                    <Popconfirm
                        title="Delete "
                        description="delete"
                        onConfirm={() => DeleteUser(item.id, item.username)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button type="primary" onClick={showModalUpdate}>
                        Open Modal
                    </Button>
                </td>
            </tr>

            <Modal title="Update" open={updateOpen} onCancel={handleCancelUpdate}>
                <>
                    <Input placeholder="username"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, username: e.target.value})
                           }}/>
                    <Input placeholder="email"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, email: e.target.value})
                           }}/>
                    <Input placeholder="password"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, password: e.target.value})
                           }}/>
                    <Input placeholder="first_name"
                           onChange={e => {
                               setUpdateUser({...updateUser, first_name: e.target.value})
                           }}/>
                    <Input placeholder="last_name"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, last_name: e.target.value})
                           }}/>
                    <Input placeholder="phone"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, phone: e.target.value})
                           }}
                    />
                    <DatePicker onChange={birthdayUpdate}
                    />
                    <Input placeholder="work_info"
                           required
                           onChange={e => {
                               setUpdateUser({...updateUser, work_info: e.target.value})
                           }}/>


                    <Input
                        type="text"
                        placeholder="city"
                        onChange={(e) => {
                            setUpdateUser({...updateUser , address:{...updateUser.address , city:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="street"
                        onChange={(e) => {
                            setUpdateUser({...updateUser , address:{...updateUser.address , street:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="region"
                        onChange={(e) => {
                            setUpdateUser({...updateUser , address:{...updateUser.address , region:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="country"
                        onChange={(e) => {
                            setUpdateUser({...updateUser , address:{...updateUser.address , country:e.target.value}});
                        }}
                    />
                    <button type={"submit"} onClick={()=>sendUpdate(item.id)}>send</button>
                </>
            </Modal>
        </>
    })

    console.log(updateUser)





    useEffect(() => {
        userList()
    }, [])
    return (
        <div>
            {contextHolder}

            <Button type="primary" onClick={showModal}>
                Create User
            </Button>
            <Modal title="Creat user" open={isModalOpen} onCancel={handleCancel}>
                <>
                    <Input placeholder="username"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, username: e.target.value})
                           }}/>
                    <Input placeholder="email"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, email: e.target.value})
                           }}/>
                    <Input placeholder="password"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, password: e.target.value})
                           }}/>
                    <Input placeholder="first_name"
                           onChange={e => {
                               setCreateUser({...createUser, first_name: e.target.value})
                           }}/>
                    <Input placeholder="last_name"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, last_name: e.target.value})
                           }}/>
                    <Input placeholder="phone"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, phone: e.target.value})
                           }}
                    />
                    <DatePicker onChange={birthdayChange}
                    />
                    <Input placeholder="work_info"
                           required
                           onChange={e => {
                               setCreateUser({...createUser, work_info: e.target.value})
                           }}/>


                    <Input
                        type="text"
                        placeholder="city"
                        onChange={(e) => {
                            setCreateUser({...createUser , address:{...createUser.address , city:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="street"
                        onChange={(e) => {
                            setCreateUser({...createUser , address:{...createUser.address , street:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="region"
                        onChange={(e) => {
                            setCreateUser({...createUser , address:{...createUser.address , region:e.target.value}});
                        }}
                    />


                    <Input
                        type="text"
                        placeholder="country"
                        onChange={(e) => {
                            setCreateUser({...createUser , address:{...createUser.address , country:e.target.value}});
                        }}
                    />
                    <button type={"submit"} onClick={sendNewUser}>send</button>
                </>
            </Modal>
            <table>
                <thead>
                <th>id</th>
                <th>username</th>
                <th>Phone</th>
                <th>wok_info</th>
                <th>Action</th>
                </thead>
                <tbody>
                {tableUser}
                </tbody>
            </table>
        </div>
    );
};

export default CompanyUserList;
