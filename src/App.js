import React, {useContext, useEffect, useState} from "react";

import {BrowserRouter } from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import AppRout from "./component/appRout"
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {$authHost} from "./http";

const App = observer( () => {
    return (
        <>

    <AppRout/>


    </>);
});


export default App;
