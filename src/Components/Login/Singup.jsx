import React from 'react';
import { Link } from 'react-router';

const Singup = () => {
    return (
         <div className="bg-base-100 min-h-screen ">
  
        <div className="card bg-gary-200
        -100 w-full max-w-lg shrink-0 shadow-2xl mx-auto border mt-20">
        <h1 className='text-2xl font-bold text-center mt-10 text-cyan-500'>Register Now</h1>
          <div className="card-body">
            <form className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input w-full" placeholder="Your Name" />
              <label className="label">Email</label>
              <input name='email' type="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input name='password' type="password" className="input w-full mb-2" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>Have No an account ? Please <Link className='text-blue-600 underline' to="/login">Login</Link></p>
          </div>
      </div>
    </div>
    );
};

export default Singup;