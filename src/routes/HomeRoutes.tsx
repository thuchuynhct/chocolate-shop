import { Outlet } from 'react-router-dom'
import CartBar from '../components/cart/CartBar'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const HomePage = () => {
    return <>
        <Header />
        <CartBar />
        <Outlet />
        <Contact />
        <Footer />
    </>
}

export default HomePage