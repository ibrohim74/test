import React, {useContext, useState} from 'react';
import {login} from "../http/userAPI";
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../index";
import {Button, Col, Form, Row} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const {user} = useContext(Context)

    const history = useNavigate();

    const click = async ()=>{
        try {
            await login(username, password);
            user.setIsAuth(true);
        }catch (e) {
            alert(e)
        }

    };

    return (
        <div style={{display:"flex" , flexDirection:"column", justifyContent:"center", alignItems:"center", height:'100vh'}}>
            <Row style={{display:"flex" , flexDirection:"column", width:'30%'}}>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={`Username:${username}`}
                        className="mb-4"
                    >
                        <Form.Control
                            type="text"
                            placeholder={`Username:${username}`}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={`Password`}
                        className="mb-4"
                    >
                        <Form.Control
                            type="text"
                            placeholder={`Password`}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </FloatingLabel>                </Col>
                <Col>
                    <Button onClick={click}>send</Button>
                </Col>
                <Col>
                    <Link to={REGISTRATION_ROUTE}>Registration</Link>
                </Col>
            </Row>

        </div>
    );
};

export default Login;
