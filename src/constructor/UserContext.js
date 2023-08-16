import React, { useContext } from 'react';
import { createContext } from 'react';
import UserConstructor from './userConstructor';

export const UserContext = createContext(null);

export const useUser = () => {
    return useContext(UserContext);
};