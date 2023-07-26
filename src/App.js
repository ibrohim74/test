
import {BrowserRouter } from "react-router-dom";
import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import AppRout from "./component/appRout"
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App =observer( () => {
    const {user} = useContext(Context)
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     check().then(data => {
    //         user.setUser(true)
    //         user.setIsAuth(true)
    //     }).finally(() => setLoading(false))
    // }, [])

    // if (loading) {
    //     return <Spinner animation={"grow"}/>
    // }
    return (
        <>

<>
    <AppRout/>
</>


    </>);
});


export default App;
