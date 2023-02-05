import { event } from '../../../assets/image';
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import './Special.scss';
import ProductCard from '../../productCard/ProductCard';

const Special = () => {
    return (
        <section id='specical' className='specical p-page'>
            <ProductCard>
                <ProductCard.Content>
                    <ProductCard.Title className='title'>celebrate a special day</ProductCard.Title>
                    <ProductCard.SubTitle className='sub-title'>LIMITED EDITION ASSORTED CHOCOLATE BOX</ProductCard.SubTitle>
                    <ProductCard.Line />
                    <ProductCard.Description className='desc'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</ProductCard.Description>
                    <ProductCard.Button to="/shop" className='btn-shop'>
                        <span>Shop all</span>
                        <HiOutlineArrowNarrowRight size={20} />
                    </ProductCard.Button>
                </ProductCard.Content>
                <ProductCard.Image className='special-image'>
                    <ProductCard.Button to="/shop" className="btn-specical">
                        <ProductCard.Img src={event} />
                        <p className='view'>Quick view</p>
                    </ProductCard.Button>
                </ProductCard.Image>
            </ProductCard>
        </section>
    )
}

export default Special;