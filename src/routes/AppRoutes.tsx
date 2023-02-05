import { useEffect, useRef } from 'react'
import { Navigate, Route, Routes, useHref, useLocation } from 'react-router-dom'
import { useData } from '../context/AppContext'
import Cart from '../pages/cart/Cart'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Product from '../pages/product/Product'
import Shop from '../pages/shop/Shop'
import HomePage from './HomeRoutes'


const RequiredLogOut = ({ children }: { children: JSX.Element }) => {
    const { user } = useData();
    return user.isLogin ? <Navigate to='/' /> : children;
}


const AppRoutes = () => {
    const { pathname } = useLocation();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const height = pathname.includes("about")
            ? (ref.current ? ref.current.offsetTop : 0)
            : 0;
        window.scrollTo(0, height);
    }, [pathname]);
    return (
        <Routes>
            <Route path='/login' element={<RequiredLogOut><Login /></RequiredLogOut>} />
            <Route path='/' element={<HomePage />}>
                <Route index path='/' element={<Home ref={ref} />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/about' element={<Home ref={ref} />} />
                <Route path='/shop/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes