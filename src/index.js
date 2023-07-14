import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/style.css"
import UserConstructor from "./constructor/userConstructor";
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user:new UserConstructor(),
    }}>
        <App />
    </Context.Provider>
    );

