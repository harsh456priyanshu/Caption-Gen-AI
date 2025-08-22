import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='w-full h-full flex flex-col items-center mt-10'>
        <div className=' w-80 flex flex-col bg-blue-300 p-10 border-solid border-4 rounded-2xl hover:border-sky-500 hover:border-4 '>
          <h3 className='text-xl mb-5  flex items-center pl-15 font-serif'>Login Here !</h3>
          <input type="text" placeholder='Username' className='bg-blue-100 px-5 py-2 rounded outline-0 mb-5' />
          <input type="password" placeholder='Password' className='bg-blue-100 px-5 py-2 rounded outline-0 mb-5' />
          <button className='bg-green-600 text-white px-2 py-4 rounded-full outline-0 mb-5 '>Login</button>
          <Link to="/signup" className="text-green-800 font-medium text-md text-center font-serif">New User !</Link>
        </div>
    </div>
  )
}

export default Login