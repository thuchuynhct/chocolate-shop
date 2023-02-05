import { friendship } from '../../../assets/image';
import './Inspire.scss';

const Inspire = () => {
    return (
        <section id='inspire' className='inspire'>
            <div className='text'>
                <h2>“There is nothing better than a friend,unless it is a friend with chocolate.” </h2>
                <span>- Linda Grayson -</span>
            </div>
            <img src={friendship} alt="" />
        </section>
    )
}

export default Inspire;