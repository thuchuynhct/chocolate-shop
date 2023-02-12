import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';
import { products } from '../data/products';
import { UserType } from './AppContext'

export type Action = "SET_LOGIN" | "SET_CART_TOGGLE" | "ADD_TO_CART" | "REMOVE_FROM_CART" | "CHECK_OUT";

const toastOptions: Partial<ToastOptions> = {
    theme: "dark",
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 2000
}

const Reducer = (state: UserType, action: { type: Action, payload?: any }): UserType => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "SET_LOGIN":
            newState.isLogin = action.payload;
            break;

        case "SET_CART_TOGGLE":
            newState.cartToggle = action.payload;
            break;
        case "ADD_TO_CART":
            {
                const productStorage = products.find(s => s.id === action.payload.id);
                if (productStorage && productStorage.amount) {
                    let product = newState.cart.find(s => s.id === action.payload.id);
                    //Nếu không có trong giỏ thì tạo mới và thêm vào giỏ
                    if (!product) {
                        product = Object.assign({}, productStorage, { amount: 0 });
                        newState.cart.push(product);
                    }
                    const newAmount = product.amount + action.payload.amount;

                    if (newAmount > 0) {
                        if (newAmount <= productStorage.amount) {
                            product.amount = newAmount;
                            toast.success("Added to shopping cart!", toastOptions);
                        }
                        else {
                            toast.error("The number of items in stock is insufficient!", toastOptions);
                        }
                    }
                }
                break;
            }

        case "REMOVE_FROM_CART":
            newState.cart = newState.cart.filter(s => s.id != action.payload.id);
            break;

        case "CHECK_OUT":
            newState.cart = [];
            toast.success("Checkout success!", toastOptions);
            break;
    }
    return newState;
}

export default Reducer