import React, {useEffect, useState} from 'react';
import {$authHost, useTokenRefresh} from "../../../http";

const CompanyProfile = () => {
    const [currentUser, setCurrentUser] = useState([]);
    const [sendProf, setSendProf] = useState([]);
    useEffect(() => {
        const getData = async () => {

            const res = await $authHost.get('api/v1/users/' + localStorage.getItem('uuid'));
            setCurrentUser([res.data])
        };
        getData()
    }, []);

    const handleSend = async ()=>{
        try {
            const res = await $authHost.put('api/v1/users/' + localStorage.getItem('uuid'),
                {
                    username:"test4",
                    email: "simpleUser_2@mail.com",
                    password: "123456",
                    first_name: "Simple_2",
                    last_name: "User_3",
                    phone: "+888888888888",
                    birthday: "1999-09-09",
                    work_info: "It park",
                    address: {
                        street: "via quart 12",
                        city: "Turin",
                        region: "Turin Piedmont",
                        country: "Italy"
                    }
                }

            );
            console.log(res)
        }catch (e) {
            console.log(e)
        }

    }
    console.log(sendProf)
    return (
        <div>
                <input type="text" value={sendProf.username} onChange={e => setSendProf({username:e.target.value})}/>
                <button onClick={handleSend}>send</button>

        </div>
    );
};

export default CompanyProfile;
