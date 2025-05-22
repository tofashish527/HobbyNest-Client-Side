import React from 'react';
import { useLoaderData } from 'react-router';

const HobbyDetails = () => {
    const data=useLoaderData()
    //const {id}=useParams()
    //const singledoc=data.find(sdoc=>sdoc._id==(id))
    const {_id,imageUrl,startDate,groupName,description}=data;
    return (
        <div className='p-1'>
            <div className='text-center mt-3 mb-3 bg-white p-5 rounded-xl'>
                <h1 className='text-3xl font-bold mt-2 mb-2'>Doctor's Profile Details</h1>
                <p className='text-sm mb-5 mt-1'>Health is not just about what you'r eating.It's also about what you'r thinking,saying and doing.A peaceful mind leads<br></br> to a healthy body.</p>
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
                    <h1 className='text-4xl font-bold mt-4 mb-15'>{groupName}</h1>
                    <p className='text-sm mt-4 mb-1'>{description}</p>
                    <p className='text-sm mt-4 mb-1'>{startDate}</p>
                </div>
            </div>
        </div>
        
    );
};

export default HobbyDetails;