import { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import { RiMenu5Fill } from 'react-icons/ri';
import { MdClose, MdOutlineLogin } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { navbars } from '../../data/header';
import { socials } from '../../data/socials';
import './Header.scss';
import { useData } from '../../context/AppContext';

const Header = () => {
    const { user, setCartToggle } = useData();
    const [active, setActive] = useState<number>(navbars[0].id);
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const bagAmount = user.cart.reduce((curr, product) => curr + product.amount, 0);

    const navigateHandle = (id: number) => {
        setActive(id);
        setIsMenu(false);
    }
    const toggleCart = () => {
        setIsMenu(false);
        setCartToggle(true);
    }
    return (
        <header className='header'>
            <Link to="/" className='logo'>BAISERS DE CHOCOLAT</Link>
            <nav className={`navbar${isMenu ? "" : " hidden"}`}>
                <ul className="nav-list">
                    {navbars.map(item => (
                        <li key={item.id}
                            className={`nav-item${active === item.id ? " active" : ""}`}
                            onClick={() => navigateHandle(item.id)}
                        >
                            {
                                item.path.includes("#")
                                    ? <a href={item.path}> {item.display} </a>
                                    : <Link to={item.path}> {item.display} </Link>
                            }
                        </li>
                    ))}
                    <li onClick={() => setIsMenu(false)}>{user.isLogin ? <LogOut /> : <Login />}</li>
                </ul>
            </nav>
            <div className='action-group'>
                <ul className='socials'>
                    {socials.map(item => (
                        <a key={item.id} href={item.link} className="social-item">
                            {item.icon}
                        </a>
                    ))}
                </ul>
                {user.isLogin ? <LogOut /> : <Login />}
                <button className='cart' onClick={toggleCart}>
                    <span className='cart-amount'>{bagAmount}</span>
                    <GiShoppingBag />
                </button>
            </div>
            <button onClick={() => setIsMenu(!isMenu)} className='btn-menu' type='button'>
                {isMenu ? <MdClose /> : <RiMenu5Fill />}
            </button>
        </header>
    )
}
const Login = () => {
    return (
        <Link to="/login" className="btn-login">
            <MdOutlineLogin />
            <span>Login</span>
        </Link>
    )
}
const LogOut = () => {
    const { setLogin } = useData();

    const logoutHandle = () => {
        setLogin(false);
    }
    return (
        <Link to="/" className="btn-login" onClick={logoutHandle}>
            <RxAvatar />
            <span>Log out</span>
        </Link>
    )
}
export default Header;