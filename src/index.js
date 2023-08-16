import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter } from "react-router-dom";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css"
import UserConstructor from "./constructor/userConstructor";
import { UserContext } from './constructor/UserContext';

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

const userStore = new UserConstructor();


root.render(
	<React.StrictMode>
		<UserContext.Provider value={userStore}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</UserContext.Provider>
	</React.StrictMode>);