import { createContext, useContext, useEffect, useReducer } from 'react'
import { ProductType } from '../data/products';
import Reducer from './Reducer';


export type UserType = {
    isLogin: boolean,
    cartToggle: boolean,
    cart: ProductType[]
}

type ContextType = {
    user: UserType,
    setLogin: (isLogin: boolean) => void,
    setCartToggle: (isToggle: boolean) => void,
    setRemoveFromCart: (id: number) => void,
    setAddToCart: (id: number, amount: number) => void,
    setCheckout: () => void;
    getTotalMoney: () => number
}
const AppContext = createContext<ContextType>({} as ContextType);


const appInitial: UserType = JSON.parse(localStorage.getItem("user") || "") || {
    isLogin: false,
    cartToggle: false,
    cart: []
}

const AppProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [user, dispatch] = useReducer(Reducer, appInitial);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user])

    const setLogin = (isLogin: boolean) => {
        dispatch({
            type: "SET_LOGIN",
            payload: isLogin
        })
    }

    const setCartToggle = (isToggle: boolean) => {
        dispatch({
            type: "SET_CART_TOGGLE",
            payload: isToggle
        })
    }
    const setRemoveFromCart = (id: number) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                id
            }
        })
    }
    const setAddToCart = (id: number, amount: number) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id,
                amount
            }
        })
    }
    const setCheckout = () => {
        dispatch({
            type: "CHECK_OUT"
        })
    }
    const getTotalMoney = (): number => {
        return user.cart.reduce((curr, product) => curr + product.amount * product.price, 0);
    }

    return <AppContext.Provider
        value={{
            user,
            setLogin,
            setCartToggle,
            setRemoveFromCart,
            setAddToCart,
            setCheckout,
            getTotalMoney
        }}>
        {children}
    </AppContext.Provider>
}

export const useData = () => (useContext(AppContext))


export default AppProvider;