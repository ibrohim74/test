import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter } from "react-router-dom";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css"
import UserConstructor from "./constructor/userConstructor";
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
    <Context.Provider value={{
        user:new UserConstructor(),
    }}>
        <BrowserRouter>  <App /></BrowserRouter>

    </Context.Provider>
</React.StrictMode>);

