

//import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { use } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Header = () => {
 const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
       toast.success("You Have Logged Out")
      })
      .catch(() => {
      toast.error("Please Try Again");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/allgroups' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>All Groups</NavLink>
      </li>
      <li>
        <NavLink to='/creategroups' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>Create Group</NavLink>
      </li>
      <li>
        <NavLink to='/mygroups' className={({ isActive }) => isActive ? 'text-blue-900 font-bold underline' : ''}>My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl font-bold text-blue-900">HobbyNest</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

       <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <div className="relative group">
  <img
    src={user.photoURL || "https://i.postimg.cc/J4dvR3m7/free-photo-of-dirt-road-in-evergreen-forest.jpg"}
    alt="User"
    className="w-10 h-10 rounded-full border-2 border-violet-600 object-cover"
  />
  {/* <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-1 bg-white text-gray-800 text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
    {user.displayName || "Anonymous"}
  </span> */}
  {user?.displayName && (
  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-400 border-gray-300 text-gray-900 text-xl font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
    {user.displayName}
  </div>
)}

</div>

            <button onClick={handleLogout} className="btn bg-blue-900 text-white px-6">Logout</button>
          </>
        ) : (
          <Link to="/login" className="btn bg-blue-900 text-white px-6">Login</Link>
        )}
      </div>

    </div>
  );
};

export default Header;
//{user.photoURL || Usericon}