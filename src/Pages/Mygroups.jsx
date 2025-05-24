import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Mygroups = () => {
  const { user } = useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/mygroups?email=${user.email}`)
        .then(res => res.json())
        .then(data => setGroups(data));
    }
  }, [user]);
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
          }
      })
    }
  });
      }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Groups</h2>
      {groups.length === 0 ? (
        <p>No groups created yet.</p>
      ) : (
    <table className="min-w-full bg-white border border-gray-200 text-sm text-left">
  <thead className="bg-gray-100">
    <tr>
      <th className="p-3 border">Group Image</th>
      <th className="p-3 border">Group Name</th>
      <th className="p-3 border">Category</th>
      <th className="p-3 border">Max Members</th>
      <th className="p-3 border">Location</th>
      <th className="p-3 border">Update/Delete</th>
    </tr>
  </thead>
  <tbody>
    {groups.map(group => (
      <tr key={group._id} className="hover:bg-gray-50">
        <td className="p-3 border">
          <img src={group.imageUrl} alt={group.groupName} className="w-20 h-16 object-cover rounded" />
        </td>
        <td className="p-3 border">{group.groupName}</td>
        <td className="p-3 border">{group.category}</td>
        <td className="p-3 border">{group.maxMembers}</td>
        <td className="p-3 border">{group.location}</td>
        <td className="p-3 border space-x-2">
     <button
      onClick={() => navigate(`/mygroups/update/${group._id}`)}
      className="p-2 bg-green-800 text-white font-bold rounded hover:bg-white hover:border-2 hover:text-black text-xl"
    >
      Update
    </button>

          <button
            onClick={() => handleDelete(group._id)}
            className="p-2 bg-red-600 text-white rounded font-bold  hover:bg-white hover:border-2 hover:text-black  text-xl"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}
    </div>
  );
};

export default Mygroups;
