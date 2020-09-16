import React, {  } from 'react'
import { carouselData } from '../../utils/carouselData';
import { blog, ourSponsors, pricing, whyJoin } from '../../utils/Data';
import Carousel from '../Tools/Carousel'
import Navbar from '../Tools/Navbar'
import WhyJoin from '../Tools/WhyJoin';

function Home() {
    return (
        <>
            <Navbar />
            <Carousel {...carouselData} />
            <WhyJoin {...whyJoin} />
            <WhyJoin {...ourSponsors} />
            <WhyJoin {...pricing} />
            <WhyJoin {...blog} />
        </>
    )
}

export default Home;
