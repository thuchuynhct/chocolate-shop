import { BiChevronRight } from 'react-icons/bi';
import ReactDOM from 'react-dom';
import './CartBar.scss';
import { useData } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Overlay from '../overlay/Overlay';
import NumberField from '../numberField/NumberField';

const CartBar = () => {
    const { user, setCartToggle, setRemoveFromCart, setAddToCart, getTotalMoney } = useData();
    const money = getTotalMoney();
    const closeCart = () => {
        setCartToggle(false);
    }
    const removeToCart = (id: number) => {
        setRemoveFromCart(id);
    }
    const amountChange = (id: number, amount: number) => {
        setAddToCart(id, amount);
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
                                        onDecrease={() => amountChange(product.id, -1)}
                                        onIncrease={() => amountChange(product.id, 1)}
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