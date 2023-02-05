import { service1, service2 } from '../../../assets/image';
import ProductCard from '../../productCard/ProductCard';
import './Service.scss';

const Service = () => {
    return (
        <section id='service' className='service'>
            <ProductCard>
                <ProductCard.Content className='p-page'>
                    <ProductCard.Title className='title'>our cacao beans</ProductCard.Title>
                    <ProductCard.SubTitle className='sub-title'>QUALITY CACAO FROM AROUND THE GLOBE​</ProductCard.SubTitle>
                    <ProductCard.Line />
                    <ProductCard.Description className='desc'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you</ProductCard.Description>
                </ProductCard.Content>
                <ProductCard.Image className='service-image'>
                    <ProductCard.Img src={service1} />
                    <ProductCard.Img src={service2} />
                </ProductCard.Image>
            </ProductCard>
        </section>
    )
}

export default Service;