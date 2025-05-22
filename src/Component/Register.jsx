import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
            <div className="w-full max-w-md mx-auto p-4 mb-5 bg-fuchsia-200 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">Register your account</h2>
      <p>Already have an account? <Link to='/login' className="text-blue-700 text-xl underline">Login</Link></p>

      <div className="my-6 space-y-4">
        <button aria-label="Login with Google" type="button"
          className="flex hover:bg-gray-400 hover:text-white items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Continue with Google</p>
        </button>
      </div>

      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-600" />
        <p className="px-3 dark:text-gray-600">OR</p>
        <hr className="w-full dark:text-gray-600" />
      </div>

      <form className="space-y-8">
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