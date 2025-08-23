import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const Login = () => {

  const [form, setForm] = useState({ username: '', password: '' });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();


  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        username: form.username,
        password: form.password
      }, {
        withCredentials: true
      });
      console.log(res);
      navigate('/');
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  console.log(form);


  return (
    <div className='w-full h-full flex flex-col items-center mt-10 '>
      <div className=' w-80 flex flex-col bg-green-300 p-10 border-solid border-0  hover:border-sky-500  '>
        <header>
          <h3 className='text-xl mb-5  flex items-center pl-15 font-serif'>Login Here !</h3>
          <p className='text-sm flex items-center font-serif'>Welcome back. We've missed you.</p>
        </header>
        <form onSubmit={handleSubmit} noValidate>
          <input type="text" name="username" placeholder='Username' className='bg-green-100 px-5 py-2 rounded outline-0 mb-5' onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' className='bg-green-100 px-5 py-2 rounded outline-0 mb-5' onChange={handleChange} />
          <button type='submit' className='bg-green-600 text-white px-10 py-1 rounded-full outline-0 mb-5 ml-10  disabled={submitting}'>{submitting ? 'Signing in...' : 'Sign in'}</button>
        </form>
        <Link to="/signup" className="text-green-800 font-medium text-md text-center font-serif">New User !</Link>
      </div>
    </div>
  )
}

export default Login