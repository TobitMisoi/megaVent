import React, { } from 'react'
import { carouselData } from '../store/carouselData';
import { blog, ourSponsors, pricing, whyJoin } from '../store/Data';
import { Navbar, Carousel, WhyJoin, Footer } from '../components';

function Home() {
    return (
        <>
            <Navbar />
            <Carousel {...carouselData} />
            <WhyJoin {...whyJoin} />
            <WhyJoin {...ourSponsors} />
            <WhyJoin {...pricing} />
            <WhyJoin {...blog} />
            <Footer />
        </>
    )
}

export default Home;
