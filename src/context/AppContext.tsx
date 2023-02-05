import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { json } from 'react-router-dom';
import { ProductType } from '../data/products';
import Reducer, { Action } from './Reducer';


export type UserType = {
    isLogin: boolean,
    cartToggle: boolean,
    cart: ProductType[]
}

type ContextType = {
    user: UserType,
    dispatch: React.Dispatch<{
        type: Action,
        payload?: any
    }>
}
const AppContext = createContext<ContextType>({} as ContextType);


const appInitial: UserType = JSON.parse(localStorage.getItem("user") || "") || {
    isLogin: false,
    cartToggle: false,
    cart: []
}

const AppProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(Reducer, appInitial);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state));
    }, [state])

    return <AppContext.Provider value={{ user: state, dispatch }}>
        {children}
    </AppContext.Provider>
}

export const useData = () => (useContext(AppContext))

export const totalMoney = (): number => {
    const { user } = useData();
    return user.cart.reduce((curr, product) => curr + product.amount * product.price, 0);
}

export default AppProvider;