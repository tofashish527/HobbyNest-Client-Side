import React from 'react';
import { useLoaderData } from 'react-router';

const HobbyDetails = () => {
    const data=useLoaderData()
    const {imageUrl,startDate,groupName,description,maxMembers,location,category}=data;
    return (
        <div className='p-1'>
            <div className='text-center mt-2 mb-3 bg-white p-5 rounded-xl'>
                <h1 className='text-4xl font-bold mt-1 mb-2'>Our Hobby Group Details</h1>
                <p className='text-sm mb-5 mt-1'> Hobbies are the heartbeat of joy — small moments where passion meets peace.Whether it's creating, exploring, or learning, your hobby is your happy place.</p>
            </div>
            <div className='flex gap-10 mt-3 mb-3 bg-white p-10 rounded-xl'>
                <div className="p-5 flex justify-center items-center bg-gray-100 w-[400px]">
                    <img
                        src={imageUrl}
                        alt=""
                        className="object-contain"
                    />
                </div>
                <div>
                    <h1 className='text-2xl font-bold mt-4 mb-10'>{groupName}</h1>
                    <p className='text-sm mt-4 mb-1'>Category : {category}</p>
                    <p className='text-sm mt-4 mb-1'>{description}</p>
                    <p className='text-sm mt-4 mb-1'>Members : {maxMembers}</p>
                    <p className='text-sm mt-4 mb-1'>Location : {location}</p>
                    <p className='text-sm mt-4 mb-1'>Journey Will be Start From : {startDate}</p>
                    <button className='btn px-6 py-2 mt-5 bg-cyan-800 text-white rounded-md hover:bg-cyan-600'>Join Group</button>
                </div>
            </div>
        </div>
        
    );
};

export default HobbyDetails;