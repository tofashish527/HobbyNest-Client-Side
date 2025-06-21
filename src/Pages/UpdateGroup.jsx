import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateGroup = () => {
     const {_id,imageUrl,startDate,maxMembers,category,groupName,description,location}=useLoaderData()
    const handleUpdate=e=>{
        e.preventDefault();
        const form=e.target;

        const formData = new FormData(form);
        const updatedhobby=Object.fromEntries(formData.entries());
        //console.log(updatedhobby);

         fetch(`https://hobby-tribe-server.vercel.app/hobbys/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedhobby)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            // Swal.fire({
                            //     title: "Group Info. Updated Successfully!",
                            //     icon: "success",
                            //     draggable: true
                            // });
                            toast.success("Group Info. Updated Successfully!")
                        }
                    })
    }
    return (
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

export default UpdateGroup;