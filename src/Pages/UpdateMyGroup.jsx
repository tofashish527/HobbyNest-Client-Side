import { useLoaderData, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateMyGroup = () => {
  const {
    _id, imageUrl, startDate, maxMembers, category,
    groupName, description, location
  } = useLoaderData();

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/hobbys/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGroup)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          toast.success("Group Info Updated!");
          setTimeout(() => navigate('/mygroups'), 1500); // go back to My Groups
        }
      });
  };

  return (
    // <div className="max-w-3xl mx-auto p-6 rounded shadow bg-pink-100 mt-10">
    //   <h2 className="text-3xl font-bold mb-6 text-center text-black">Update My Group</h2>
    //   <form onSubmit={handleUpdate} className="space-y-4">
    //     {/* your full form here, pre-filled using defaultValue like before */}
    //     <div>
    //       <label className="font-semibold">Group Name</label>
    //       <input
    //         type="text"
    //         name="groupName"
    //         defaultValue={groupName}
    //         required
    //         className="w-full mt-1 p-2 border rounded"
    //       />
    //     </div>
    //     {/* repeat for all fields like category, maxMembers, startDate, etc. */}
    //     <button
    //       type="submit"
    //       className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800"
    //     >
    //       Update Group
    //     </button>
    //     <ToastContainer />
    //   </form>
    // </div>
    <div>
            <div className="max-w-3xl mx-auto bg-pink-100 shadow-xl rounded-2xl p-6 sm:p-8 mt-6 sm:mt-10 w-full">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">Update Group Info.</h2>
  <form onSubmit={handleUpdate} className="space-y-4">
 
    <div>
      <label className="block font-semibold">Group Name</label>
      <input
        type="text"
        name="groupName"
        defaultValue={groupName}
        className="w-full mt-1 p-2 border rounded-md"
        required
      />
    </div>

    
    <div>
      <label className="block font-semibold">Hobby Category</label>
      <select
        name="category"
        defaultValue={category}
        className="w-full mt-1 p-2 border rounded-md"
        required
      >
        <option value="">Select Category</option>
        <option>Drawing & Painting</option>
        <option>Photography</option>
        <option>Video Gaming</option>
        <option>Fishing</option>
        <option>Running</option>
        <option>Cooking</option>
        <option>Reading</option>
        <option>Writing</option>
      </select>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold">Max Members</label>
        <input
          type="number"
          name="maxMembers"
          defaultValue={maxMembers}
          className="w-full mt-1 p-2 border rounded-md"
          min="1"
          required
        />
      </div>
      <div>
        <label className="block font-semibold">Start Date</label>
        <input
          type="date"
          name="startDate"
          defaultValue={startDate}
          className="w-full mt-1 p-2 border rounded-md"
          required
        />
      </div>
    </div>

    
    <div>
      <label className="block font-semibold">Meeting Location</label>
      <input
        type="text"
        name="location"
        defaultValue={location}
        className="w-full mt-1 p-2 border rounded-md"
        required
      />
    </div>

    <div>
      <label className="block font-semibold">Image URL</label>
      <input
        type="url"
        name="imageUrl"
        defaultValue={imageUrl}
        className="w-full mt-1 p-2 border rounded-md"
        required
      />
    </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold">User Name</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border rounded-md"
        
        />
      </div>
      <div>
        <label className="block font-semibold">User Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
    </div>
   
    <div>
      <label className="block font-semibold">Description</label>
      <textarea
        name="description"
        defaultValue={description}
        className="w-full mt-1 p-2 border rounded-md"
        rows="3"
        required
      ></textarea>
    </div>

    <div className="text-center mt-6">
      <button
        type="submit"
        className="bg-gray-300 text-black border-2 px-6 py-2 rounded-xl hover:bg-indigo-900 hover:text-white transition w-full sm:w-auto"
      >
        Update Group
      </button>
      <ToastContainer></ToastContainer>
    </div>
  </form>
</div>
        </div>
  );
};

export default UpdateMyGroup;
