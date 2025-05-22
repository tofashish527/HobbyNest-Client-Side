import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../Context/Authcontext';

const Register = () => {
    const {createuser}=use(Authcontext)
    console.log(createuser);

    const handleregister=e=>{
      e.preventDefault();
      const form=e.target;
      const formdata=new FormData(form);
      const email=formdata.get('email');
      const photo=formdata.get('photo');
      const password=formdata.get('password');
      console.log(email,photo,password);
     
      createuser(email,password)
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error)
      })

    }
    return (
            <div className="w-full max-w-md mx-auto p-4 mb-5 bg-fuchsia-200 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
      <p>Already have an account? <Link to='/login' className="text-blue-700 text-xl underline">Login</Link></p>

      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-600" />
        <p className="px-3 dark:text-gray-600">OR</p>
        <hr className="w-full dark:text-gray-600" />
      </div>

      <form onSubmit={handleregister} className="space-y-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm">Your name</label>
            <input type="text" name="name" placeholder="Your Name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300" required />
          </div>

          <div>
            <label className="block text-sm">Photo URL</label>
            <input type="text" name="photo" placeholder="Your Photo URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300" />
          </div>

          <div>
            <label className="block text-sm">Email address</label>
            <input type="email" name="email" placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300" required />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">Password</label>
            <input
              type= 'password'
              name="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300"
              required
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-xl text-gray-600"
            >
            </span>
          </div>
        </div>

        <button type="submit" className="btn border w-full px-8 py-3 font-semibold rounded-md bg-blue-950 text-white hover:bg-gray-400">
          Register
        </button>
      </form>
    </div>
    );
};

export default Register;