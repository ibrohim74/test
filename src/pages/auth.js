import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Button, Checkbox, Form, Input} from 'antd';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {login, registration} from "../http/userAPI";
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


const Auth = observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
console.log(email)
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(HOME_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <>
            <div className="form-content">
                {isLogin ?
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="tel number"
                            name="telNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your tel number!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            tooltip="This is a required field"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    max: 16,
                                    min: 8,
                                    required: true,
                                    message: 'minlength 8, maxlength 16',
                                },
                            ]}
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        >
                            <Input.Password/>
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={click}>
                                Login
                            </Button>
                        </Form.Item>
                        <div className="login-sign">
                            <p>Don't have an account ? <Link to={'/registration'}>SignUp</Link></p>
                        </div>
                    </Form>

                    :

                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="tel number"
                            name="telNumber"
                            rules={[
                                {
                                    type: "tel",
                                    required: true,
                                    message: 'Please input your tel number!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="company"
                            name="company"
                            rules={[
                                {

                                    required: true,
                                    message: 'Please input your company!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            tooltip="This is a required field"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    max: 16,
                                    min: 8,
                                    required: true,
                                    message: 'minlength 8, maxlength 16',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                            className={"form-check"}
                        >
                            <Checkbox>Menandjer company</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" onClick={click}>
                                SignUp
                            </Button>
                        </Form.Item>
                        <div className="login-sign">
                            <p>Do you have an account ? <Link to={'/login'}>Login</Link></p>
                        </div>
                    </Form>
                }

            </div>
        </>
    );
});

export default Auth;
