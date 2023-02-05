import { Link } from 'react-router-dom';
import { hero } from '../../../assets/image';
import './Hero.scss';

const Hero = () => {
    return (
        <section id='hero' className='hero'>
            <span className='sub-title'>- Chocolate boutique -</span>
            <h1 className='main-title'>Baisers <span className='small'>de</span> chocolat</h1>
            <Link to="/shop" className='btn-white btn-shop'>Shop Online</Link>
            <img className='hero-image' src={hero} alt="" />
        </section>
    )
}

export default Hero;