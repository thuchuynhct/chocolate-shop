import { BiChevronRight } from 'react-icons/bi';
import ReactDOM from 'react-dom';
import './CartBar.scss';
import { products, ProductType } from '../../data/products';
import { totalMoney, useData } from '../../context/AppContext';
import { isRouteErrorResponse, Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Overlay from '../overlay/Overlay';
import NumberField from '../numberField/NumberField';

const CartBar = () => {
    const { user, dispatch } = useData();
    const money = totalMoney();
    const closeCart = () => {
        dispatch({
            type: "SET_CART_TOGGLE",
            payload: false
        })
    }
    const removeToCart = (id: number) => {
        dispatch({
            type: "REMOVE_TO_CART",
            payload: {
                id
            }
        })
    }
    const amountChange = (product: ProductType, num: number) => {
        const changeInfo: Partial<ProductType> = {
            id: product.id,
            amount: num
        }
        dispatch({
            type: "ADD_TO_CART",
            payload: changeInfo
        })
    }
    return ReactDOM.createPortal((
        <Overlay show={user.cartToggle} onClick={closeCart}>
            <aside className={`cartbar${user.cartToggle ? " show" : ""}`}>
                <div className="cart-heading">
                    <button onClick={closeCart}><BiChevronRight /></button>
                    <h2>Cart</h2>
                </div>
                <div className="cart-order">
                    {
                        user.cart.map(product => (
                            <div key={product.id} className="product">
                                <img src={product.image[0]} alt="" />
                                <div className="product-details">
                                    <h3>{product.name}</h3>
                                    <span>${product.price}.00</span>
                                    <NumberField
                                        value={product.amount}
                                        onDecrease={() => amountChange(product, -1)}
                                        onIncrease={() => amountChange(product, 1)}
                                    />
                                </div>
                                <button onClick={() => removeToCart(product.id)} className='remove'><MdClose size={20} /></button>
                            </div>
                        ))
                    }
                </div>
                <div className='cart-footer'>
                    <span>Subtotal: ${money}</span>
                    <Link
                        to="/cart" type='button'
                        onClick={closeCart}
                        className='btn-yellow'
                    >
                        View Cart</Link>
                </div>
            </aside>
        </Overlay>
    ), document.querySelector("#root") as HTMLElement)
}

export default CartBar;