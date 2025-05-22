import React from 'react';
import { useLoaderData } from 'react-router';
import HobbyCard from '../Component/HobbyCard';

const Allgroups = () => {
    const data = useLoaderData();
    return (
        <div className='mt-5 mb-5'>
            <h2 className='text-center text-3xl font-bold mb-5 mt-3'>All Hobby Groups</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    data.map(hobby => (
                        <HobbyCard key={hobby._id} hobby={hobby} />
                    ))
                }
            </div>
        </div>
    );
};

export default Allgroups;