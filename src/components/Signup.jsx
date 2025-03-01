import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [error, setError ] = useState("");
  const [loading, setLoading ] = useState("");

  const { session, signUpNewUser } = UserAuth();
    return <div>
        <form className="max-2-md m-auto pt-24">
            <h2 className="font-bold pb-2">Sign up today!</h2>
            <p>Already have an account? <Link to="/signin"></Link></p>
            <div className="flex flex-col py-4">
                <input placeHolder="email" className="p-3 mt-6" type="email"/>
                <input placeHolder="password" className="p-3 mt-6" type="password"/>
                <button type="submit" disabled={loading} lassName="mt-6 2-full">Sign up</button>
            </div>
        </form>
    </div>
}

export default Signup;