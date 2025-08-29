import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-linear-to-r/shorter from-green-400 to-green-500 bg-opacity-20 relative'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex items-center'>
                        <h1 className='font-serif font-bold text-green-900 text-2xl sm:text-3xl'>
                            <Link to="/">Caption GenAI</Link>
                        </h1>
                    </div>
                    
                    {/* Mobile menu button */}
                    <div className='flex items-center sm:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-green-300 hover:text-green-700'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            ) : (
                                <svg className='block h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className='hidden sm:flex sm:items-center sm:space-x-4'>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/comment" className="nav-link">Comment</Link>
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`transform transition-all duration-300 ease-in-out ${isOpen ? 'block opacity-100 scale-y-100' : 'hidden opacity-0 scale-y-0'} sm:hidden origin-top absolute w-full bg-white shadow-lg left-0 top-16`}>
                    <div className='pt-2 pb-3 space-y-1'>
                        <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link to="/comment" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Comment</Link>
                        <Link to="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link to="/login" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar