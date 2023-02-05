import { forwardRef } from 'react';
import { about } from '../../../assets/image';
import ProductCard from '../../productCard/ProductCard';
import './About.scss';

const About = () => {
    return (
        <section id="about" className='about'>
            <ProductCard>
                <ProductCard.Image>
                    <ProductCard.Img src={about} />
                </ProductCard.Image>
                <ProductCard.Content className='p-page'>
                    <ProductCard.Title className='title'>about</ProductCard.Title>
                    <ProductCard.SubTitle className='sub-title'>BAISERS DE CHOCOLAT</ProductCard.SubTitle>
                    <ProductCard.Line />
                    <ProductCard.Description className='desc'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</ProductCard.Description>
                    <ProductCard.Description className='desc'>I’m a great place for you to tell a story and let your users know a little more about you.​ This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.</ProductCard.Description>
                </ProductCard.Content>
            </ProductCard>
        </section>
    )
}

export default forwardRef(About);