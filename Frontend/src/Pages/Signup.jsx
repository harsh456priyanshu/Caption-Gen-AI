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
      <div className=' flex flex-col items-center mt-10 '>
        <div className=' w-80 flex flex-col bg-blue-300 p-10 border-solid border-4 rounded-2xl  hover:border-sky-500 hover:border-4'>
          <header>
            <h3 className='text-xl mb-5  flex items-center pl-15 font-serif'>Register Here !</h3>
            <p className='text-sm flex items-center font-serif'>Join us and start exploring.</p>
          </header>
         <form  onSubmit={handleSubmit}>
           <input type="text" name="username" placeholder='Username' className='bg-blue-100 px-5 py-2 rounded outline-0 mb-5 ' onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' className='bg-blue-100 px-5 py-2 rounded outline-0 mb-5' onChange={handleChange} />
          <button type='submit' className='bg-green-600 text-white px-2 py-4 rounded-full outline-0 mb-5 '>Register Now</button>
         </form>
          <Link to="/login" className="text-red-800 font-medium text-md text-center font-serif">Existing User !</Link>
        </div>
      </div>
    )
  }

  export default signup