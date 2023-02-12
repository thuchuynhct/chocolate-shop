import { products, ProductType } from '../../data/products';
import './Shop.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useData } from '../../context/AppContext';
import NumberField from '../../components/numberField/NumberField';

const Shop = () => {
    return (
        <main>
            <div className='shop p-page'>
                <h2>CHOOSE YOUR CHOCOLATE</h2>
                <div className='cards'>
                    {
                        products.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

const Product = ({ item }: { item: ProductType }) => {
    const navigate = useNavigate();
    const { user, setAddToCart } = useData();
    const [isHover, setIsHover] = useState<boolean>(false);
    const [amount, setAmount] = useState<number>(1);

    const amountChange = (number: number) => {
        const newAmout = amount + number;
        if (newAmout >= 0 && newAmout <= item.amount) {
            setAmount(newAmout);
        }
    }
    const addtoCart = () => {
        if (!user.isLogin) {
            navigate("/login");
            return
        }
        setAddToCart(item.id, amount);
    }
    return (
        <div
            className='card-item'
            onMouseLeave={() => setIsHover(false)}
            onMouseMove={() => setIsHover(true)}
        >
            <Link to={`/shop/${item.id}`}>
                <img src={item.image[isHover ? 1 : 0]} alt="" />
            </Link>
            <p>{item.name}</p>
            <p>${item.price}.00</p>
            <NumberField
                value={`${amount} / ${item.amount}`}
                onDecrease={() => amountChange(-1)}
                onIncrease={() => amountChange(1)}
            />
            {item.tag && <span className='tag'>{item.tag}</span>}
            <button onClick={addtoCart} type="button" className='btn-black btn-cart'>Add to cart</button>
        </div>
    )
}
export default Shop;