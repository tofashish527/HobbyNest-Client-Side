import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const Creategroups = () => {
   const { user } = useContext(AuthContext);

  const handleCreate = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());

    // Attach user details
    newGroup.userEmail = user?.email;
    newGroup.userName = user?.displayName;

    fetch('https://hobby-tribe-server.vercel.app/hobbys', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newGroup),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({ title: "Group Created Successfully!", icon: "success" });
          form.reset();
        }
      });
    }
    return (
    <div className="max-w-3xl mx-auto bg-pink-100 shadow-xl rounded-2xl p-6 sm:p-8 mt-6 sm:mt-10 w-full">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">Create a Hobby Group</h2>
  <form onSubmit={handleCreate} className="space-y-4">
 
    <div>
      <label className="block font-semibold">Group Name</label>
      <input
        type="text"
        name="groupName"
        className="w-full mt-1 p-2 border rounded-md"
        required
      />
    </div>

    
    <div>
      <label className="block font-semibold">Hobby Category</label>
      <select
        name="category"
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
        className="w-full mt-1 p-2 border rounded-md"
        required
      />
    </div>

    <div>
      <label className="block font-semibold">Image URL</label>
      <input
        type="url"
        name="imageUrl"
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
        Create Group
      </button>
    </div>
  </form>
</div>

    );
};

export default Creategroups;