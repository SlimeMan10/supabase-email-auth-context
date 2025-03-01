import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return <div>
    <form className='max--w-md m-auto pt-24'>
      <h2 className='font-bold pb-2'>Sign up today!</h2>
      <p>Already have an account? <Link to="/signin"></Link> </p>
      <div className="flex flex-col py-4">
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
        <button>Sign Up</button>
      </div>
    </form>
  </div>
};

export default Signup;
