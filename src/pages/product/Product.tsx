import React, { useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useData } from '../../context/AppContext';
import { products } from '../../data/products';
import './Product.scss';


const Product = () => {
    const { setAddToCart } = useData();
    const [productAmount, setProductAmount] = useState(1);
    const { id } = useParams();
    const product = products.find(s => s.id === Number(id));

    if (!product)
        return <Navigate to="/shop" />

    const isFirst = product.id === products[0].id;
    const isLast = product.id === products[products.length - 1].id;

    const addToCart = () => {
        setAddToCart(product.id, productAmount)
    }
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setProductAmount(Number(value));
    }
    return (
        <main>
            <div className='product-view p-page'>
                <div className="location">
                    <div className='breadcrumbs'>
                        <Link to="/"><span>Home /</span></Link>
                        <Link to="/shop"><span>Shop /</span></Link>
                        <span className='disable'>{product.name}</span>
                    </div>
                    <Link className='breadcrumbs-mobile' to="/shop">
                        <HiOutlineArrowNarrowLeft size={20} />
                        <span>Back to shop</span>
                    </Link>
                    <div className="nav">
                        <Link
                            to={`/shop/${product.id + -1}`}
                            className={`${isFirst ? "disable" : ""}`}>
                            {"< Preview"}
                        </Link>
                        <hr />
                        <Link to={`/shop/${product.id + 1}`}
                            className={`${isLast ? "disable" : ""}`}>
                            {"Next >"}
                        </Link>
                    </div>
                </div>
                <div className="product-details">
                    <div className="images">
                        {product.image.map((img, index) => (
                            <button type='button' key={index}>
                                <img src={img} alt="" />
                            </button>
                        ))}
                    </div>
                    <div className="image-zoom">
                        <img src={product.image[1]} alt="" />
                    </div>
                    <div className="product-order">
                        <h3>{product.name}</h3>
                        <span>SKU: 000{product.id}</span>
                        <span>${product.price}.00</span>
                        <span>Quality: {product.amount}</span>
                        <input type="number" defaultValue={1} onChange={inputChange} />
                        <button className='btn-yellow' onClick={addToCart}>Add to cart</button>
                        <Link to='/cart' className='btn-black'>Buy Now</Link>
                    </div>
                </div>
                <div className="order-service">
                    <div className='service-item'>
                        <h3>Product Info</h3>
                        <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</p>
                    </div>
                    <div className='service-item'>
                        <h3>Refund Policy</h3>
                        <p>I’m a Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
                    </div>
                    <div className='service-item'>
                        <h3>Shipping Info</h3>
                        <p>I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>
                    </div>
                </div >
            </div >
        </main >
    )
}

export default Product;