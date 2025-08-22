import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className=' flex  bg-linear-to-r/shorter from-green-100 to-green-900'>
            <div className='w-2/3'>
                <h1  className='font-serif font-bold text-green-900 h-15 pt-4 pl-5 text-3xl'><Link to="/">Caption GenAI</Link></h1>
            </div>
            <div className='w-1/3 flex justify-start md:justify-between mt-4 mb-4'>
                <Link to="/" className="flex items-center  bg-green-900  text-white font-semibold border-1 border-solid px-5 rounded-full py-2 hover:border-double  hover:bg-green-300 hover:text-black hover:border-b-4 hover:shadow-xl/30 " >Home</Link>
                <Link to="/comment" className="flex items-center  bg-green-900  text-white font-semibold border-1 border-solid px-5 rounded-full py-2 hover:border-double  hover:bg-green-300 hover:text-black hover:border-b-4 hover:shadow-xl/30" >Comment</Link>
                <Link to="/about" className="flex items-center  bg-green-900  text-white font-semibold border-1 border-solid px-5 rounded-full py-2 hover:border-double  hover:bg-green-300 hover:text-black hover:border-b-4 hover:shadow-xl/30" >About Us</Link>
                <Link to="/login" className="flex items-center  bg-green-900  text-white font-semibold border-1 border-solid px-5 rounded-full py-2 hover:border-double  hover:bg-green-300 hover:text-black hover:border-b-4 hover:shadow-xl/30" >Login</Link>
            </div>
        </div>
    )
}

export default Navbar