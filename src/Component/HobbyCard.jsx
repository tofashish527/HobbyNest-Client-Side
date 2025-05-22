import React from 'react';
import { GiHeartKey } from 'react-icons/gi';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const HobbyCard = ({hobby}) => {
    const {_id,imageUrl,startDate,groupName,description}=hobby;

    const handleDelete=(_id)=>{
       console.log(_id);
       Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    //delete from db
    fetch(`http://localhost:3000/hobbys/${_id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("after delete",data);
        if(data.deletedCount)
        {
               Swal.fire({
      title: "Deleted!",
      text: "Your coffee has been deleted.",
      icon: "success"
    });

    //remove from state
    // const remainingcoffees=coffees.filter(cof=>cof._id!==_id)
    // setCoffees(remainingcoffees)
        }
    })
  }
});
    }

    return (
        <div>
<div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-pink-950 font-semibold tracking-wide">{groupName}</h2>
			<p className="dark:text-gray-800">{description}</p>
            <div className='flex'>
             <p className='text-red-900 font-bold text-xl'>Journey Starts From</p>
             <button className=' ml-20 text-sm p-2 rounded-4xl border border-cyan-950 text-cyan-700'> {startDate}</button>
            
            </div>
             <div className='flex'>
                <GiHeartKey className='text-lime-700 pt-1' size={20} />
            <p className='text-lime-700'>Join before it's too late to cherish your hobbys!!</p>
             </div>
		</div>
    <div className='flex justify-between'>
        <Link to={`/updategroup/${_id}`}>
        <button className="btn join-item  border-gray-400 border-2 rounded-2xl">Update Info.</button>
        </Link>
    <button onClick={()=>handleDelete(_id)} className="btn join-item  border-gray-400 border-2 rounded-2xl">Remove</button>
    </div>
    <Link to={`/hobbys/${_id}`}>
		<button type="button" className="flex border-gray-400 border-2 items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="9gwrgp">See more</button>
    </Link>
	</div>
   
</div>
        </div>

    );
};

export default HobbyCard;