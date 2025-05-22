import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { Authcontext } from '../Context/Authcontext';

const Login = () => {
	 const {loguser,signInWithGoogle}=use(Authcontext)
		console.log(loguser);
	   const navigate=useNavigate();
		const handlelogin=e=>{
		  e.preventDefault();
		  const form=e.target;
		  const formdata=new FormData(form);
		  const email=formdata.get('email');
		  const password=formdata.get('password');
		  console.log(email,password);
		 
		  loguser(email,password)
		  .then(result=>{
			console.log(result.user);
			navigate('/');
		  })
		  .catch(error=>{
			console.log(error)
		  })
	
		}

		 const handleGooglelogin = () => {
        signInWithGoogle()
          .then((result) => {
			console.log(result.user)
            //const user = result.user;
            //setUser(user);
            navigate('/'); 
          })
          .catch((error) => {
            alert(error.message);
          });
      };

    return (
         <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-fuchsia-200 dark:bg-gray-50 dark:text-gray-800">
	<h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
    <p>New To Our Website? Please <Link className='text-xl text-blue-700 underline' to='/register'>Register</Link></p>
	<div className="my-6 space-y-4">
		<button onClick={handleGooglelogin}  aria-label="Login with Google" type="button" className="flex  hover:bg-gray-400 hover:text-white items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Continue with Google</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
	<form onSubmit={handlelogin}  noValidate="" action="" className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm">Email address</label>
				<input type="email"name="email" id="email" placeholder="you@example.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 required" />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label htmlFor="password" className="text-sm">Password</label>
					<div><a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600 ">Forgot password?</a></div>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 required" />
			</div>
		</div>
		<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-950 text-white hover:bg-gray-400"> Sign in</button>
	</form>
</div>
    );
};

export default Login;