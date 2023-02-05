import About from '../../components/home/about/About';
import Contact from '../../components/contact/Contact';
import Hero from '../../components/home/hero/Hero';
import Inspire from '../../components/home/inspire/Inspire';
import Media from '../../components/home/media/Media';
import Service from '../../components/home/service/Service';
import Special from '../../components/home/special/Special';
import './Home.scss';
import React, { forwardRef } from 'react';

const Home = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <main>
            <Hero />
            <Special />
            <Media />
            <div ref={ref}>
                <About />
            </div>
            <Inspire />
            <Service />
        </main>
    )
})

export default Home;