import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'



const signup = () => {

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
      const res = await axios.post("http://localhost:3000/api/auth/register", {
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

    return (
      <div className=' flex flex-col items-center mt-10 p-10 '>
        <div className=' w-80 flex flex-col bg-green-400 p-10 '>
          <header>
            <h3 className='text-xl mb-5  flex items-center pl-15 font-serif'>Register Here !</h3>
            <p className='text-sm flex justify-center mb-4 font-serif'>Join us and start exploring.</p>
          </header>
         <form  onSubmit={handleSubmit}>
           <input type="text" name="username" placeholder='Username' className='bg-green-100 px-5 py-2 rounded outline-0 mb-5 ' onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' className='bg-green-100 px-5 py-2 rounded outline-0 mb-5' onChange={handleChange} />
          <button type='submit' className='bg-green-600 text-white px-10 py-1 rounded-full outline-0 mb-5 ml-10'>Register</button>
         </form>
          <Link to="/login" className="text-white font-medium text-md text-center font-serif">Existing User !</Link>
        </div>
      </div>
    )
  }

  export default signup