import { MdClose } from 'react-icons/md';
import NumberField from '../../components/numberField/NumberField';
import { totalMoney, useData } from '../../context/AppContext';
import { ProductType } from '../../data/products';
import './Cart.scss';

const Cart = () => {
    const { user, dispatch } = useData();
    const money = totalMoney();

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
    const checkOut = () => {
        dispatch({
            type: "CHECK_OUT"
        })
    }
    return (
        <main>
            <div className="checkout p-page">
                <div className="left">
                    <h2>Cart</h2>
                    <div className="products">
                        {user.cart.map(product => (
                            <div key={product.id} className="product">
                                <img src={product.image[0]} alt="" />
                                <div className='product-details'>
                                    <div className='product-info'>
                                        <h3>{product.name}</h3>
                                        <span>${product.price}.00</span>
                                    </div>
                                    <div className="product-amount">
                                        <NumberField className='amount'
                                            value={product.amount}
                                            onDecrease={() => amountChange(product, -1)}
                                            onIncrease={() => amountChange(product, 1)}
                                        />
                                        <span>${product.amount * product.price}.00</span>
                                    </div>
                                </div>
                                <button onClick={() => removeToCart(product.id)} className='remove'><MdClose size={20} /></button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <h2>Order Summary</h2>
                    <div className='subtotal'>
                        <span>Subtotel</span>
                        <span>${money}.00</span>
                    </div>
                    <div className='total'>
                        <span>Total</span>
                        <span>${money}.00</span>
                    </div>
                    <button disabled={user.cart.length <= 0} onClick={checkOut} className='btn-yellow'>Checkout</button>
                </div>
            </div>

        </main>
    )
}

export default Cart;