import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from './HobbyCard';
import BannerSlider from './BannerSlider';
import OfferSection from './OfferSection';
import Testimonials from './Testimonial';

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className='mt-5 mb-5'>
            <BannerSlider></BannerSlider>
            <h2 className='text-center text-3xl font-bold mb-5 mt-3'>Our Popular Groups</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    data.map(hobby=><HobbyCard key={hobby._id} hobby={hobby}></HobbyCard>)
                }
            </div>
            <OfferSection></OfferSection>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;