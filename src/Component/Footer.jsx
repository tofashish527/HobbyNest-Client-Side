import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa';
import { NavLink } from 'react-router';


  const Footer=()=> {
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
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/fZQp30q/photo-1564724356929-f6a2e5998d9b-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg')",
        }}
      >
        <footer className="bg-white/90 backdrop-blur-md text-gray-800 pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-300 pb-10">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-blue-900 mb-3">HobbyNest</h1>
              <p className="text-gray-700 mb-4">Whether artistic or analytical, hobbies offer a constructive outlet that nurtures both mental clarity and personal fulfillment.</p>
              <div className="flex space-x-4 text-lg text-blue-900">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="hover:text-blue-600 cursor-pointer" />
                <FaYoutube className="hover:text-red-500 cursor-pointer" />
                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
  
            <div>
              <h3 className="text-blue-900 font-semibold mb-4">Our Address</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" /> 123 Address, New York, USA
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-blue-500" /> tofashish@edtalk.com
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-blue-500" /> +11 12 234 567
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-blue-900 font-semibold mb-4">Quick Links</h3>
               <ul className="space-y-2 text-sm text-gray-800">
                {links}
              </ul>
            </div>
  
            <div>
              <h3 className="text-blue-900 font-semibold mb-4">Hobby Category</h3>
              <ul className="space-y-2 text-sm text-gray-800">
                <li className="hover:text-blue-600 cursor-pointer">Photography</li>
                <li className="hover:text-blue-600 cursor-pointer">Cooking Crafts</li>
                <li className="hover:text-blue-600 cursor-pointer">Video Streaming</li>
                <li className="hover:text-blue-600 cursor-pointer">Digital painting</li>
              </ul>
            </div>
          </div>
  
          <div className="max-w-7xl mx-auto px-6 mt-6 text-center text-sm text-gray-700">
            <div className="mb-2">© 2025 HobbyNest | Powered by Tofashish Nujum</div>
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="hover:text-blue-600 cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 cursor-pointer">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;