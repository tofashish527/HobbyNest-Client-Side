import React from 'react';

const Creategroups = () => {
    return (
    //     <div className='mt-5 mb-5'>
    //         <h1 className='text-3xl text-center font-bold'>Create a New Group</h1>
    //          <form  className="space-y-4">
    //     <div>
    //       <label className="block font-semibold">Group Name</label>
    //       <input
    //         type="text"
    //         name="groupName"
    //         className="w-full mt-1 p-2 border rounded-md"
    //         required
    //       />
    //     </div>

    //     <div>
    //       <label className="block font-semibold">Hobby Category</label>
    //       <select
    //         name="category"
    //         className="w-full mt-1 p-2 border rounded-md"
    //         required
    //       >
    //         <option value="">Select Category</option>
    //         <option>Drawing & Painting</option>
    //         <option>Photography</option>
    //         <option>Video Gaming</option>
    //         <option>Fishing</option>
    //         <option>Running</option>
    //         <option>Cooking</option>
    //         <option>Reading</option>
    //         <option>Writing</option>
    //       </select>
    //     </div>

    //     <div>
    //       <label className="block font-semibold">Description</label>
    //       <textarea
    //         name="description"
    //         className="w-full mt-1 p-2 border rounded-md"
    //         rows="3"
    //         required
    //       ></textarea>
    //     </div>

    //     <div>
    //       <label className="block font-semibold">Meeting Location</label>
    //       <input
    //         type="text"
    //         name="location"
    //         className="w-full mt-1 p-2 border rounded-md"
    //         required
    //       />
    //     </div>

    //     <div className="grid grid-cols-2 gap-4">
    //       <div>
    //         <label className="block font-semibold">Max Members</label>
    //         <input
    //           type="number"
    //           name="maxMembers"
    //           className="w-full mt-1 p-2 border rounded-md"
    //           min="1"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block font-semibold">Start Date</label>
    //         <input
    //           type="date"
    //           name="startDate"
    //           className="w-full mt-1 p-2 border rounded-md"
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div>
    //       <label className="block font-semibold">Image URL</label>
    //       <input
    //         type="url"
    //         name="imageUrl"
    //         className="w-full mt-1 p-2 border rounded-md"
    //         required
    //       />
    //     </div>

    //     <div className="grid grid-cols-2 gap-4">
    //       <div>
    //         <label className="block font-semibold">User Name</label>
    //         <input
    //           type="text"
    //           className="w-full mt-1 p-2 border rounded-md bg-gray-100"
    //           readOnly
    //         />
    //       </div>
    //       <div>
    //         <label className="block font-semibold">User Email</label>
    //         <input
    //           type="email"
    //           className="w-full mt-1 p-2 border rounded-md bg-gray-100"
    //           readOnly
    //         />
    //       </div>
    //     </div>

    //     <div className="text-center mt-6">
    //       <button
    //         type="submit"
    //         className="bg-white border-2 text-indigo-900 px-6 py-2 rounded-xl hover:bg-indigo-900 hover:text-white transition w-full"
    //       >
    //         Create
    //       </button>
    //     </div>
    //   </form>
    //     </div>
    <div className="max-w-3xl mx-auto bg-pink-100 shadow-xl rounded-2xl p-6 sm:p-8 mt-6 sm:mt-10 w-full">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">Create a Hobby Group</h2>
  <form className="space-y-4">
    
  
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

   
    <div>
      <label className="block font-semibold">Description</label>
      <textarea
        name="description"
        className="w-full mt-1 p-2 border rounded-md"
        rows="3"
        required
      ></textarea>
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
          className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          readOnly
        />
      </div>
      <div>
        <label className="block font-semibold">User Email</label>
        <input
          type="email"
          className="w-full mt-1 p-2 border rounded-md bg-gray-100"
          readOnly
        />
      </div>
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