import { feature } from '../../../assets/image';
import './Media.scss';

const Media = () => {
    return (
        <section id='media' className='media'>
            <img src={feature} alt="" />
        </section>
    )
}

export default Media;