import React from 'react';
import { GiHeartKey } from 'react-icons/gi';
import Swal from 'sweetalert2';

const HobbyCard = ({hobby}) => {

   
    const {_id,imageUrl,startDate,groupName,description}=hobby;
    return (
        <div>
<div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-pink-950 font-semibold tracking-wide">{groupName}</h2>
			<p className="dark:text-gray-800">{description}</p>
             <p className='text-red-900 font-bold text-xl'>Journey Starts From <button className=' ml-15 text-sm p-2 rounded-4xl border border-cyan-950 text-cyan-700'> {startDate}</button></p>
             <div className='flex'>
                <GiHeartKey className='text-lime-700 pt-1' size={20} />
            <p className='text-lime-700'>Join before it's too late to cherish your hobbys!!</p>
             </div>
		</div>
		<button type="button" className="flex border-gray-300 border-2 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="9gwrgp">Explore more</button>
	</div>
   
</div>
        </div>

    );
};

export default HobbyCard;