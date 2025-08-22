
import React, { useState } from 'react';
import bgImage from '../assets/Images/comment.jpg';
import bgImageMirror from '../assets/Images/commentMirror.jpg';



const Comment = () => {
   const [isHover, setIsHover] = useState(false);
   return (
      <div
         className='flex flex-col min-h-screen'
         style={{
            backgroundImage: `url(${isHover ? bgImageMirror : bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.3s ease',
         }}
      >
         <div className='flex flex-col'>
            <div className=' flex  justify-items-start w-full h-20 px-7 mt-20'>
               <h1 className=' flex items-center text-2xl font-serif text-yellow-400 font-extrabold'> <span className='text-white'> People who loves use  </span>  To caption gen AI for social Media !</h1>
            </div>
            <div
               className='flex flex-col items-end-safe h-20 px-7 mb-10 input-bg-parent'
               onMouseEnter={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}
            >
               <input type="text" className=' bg-green-400 text-black px-10 py-1 mt-10 w-67 rounded-full text-sm outline-0 hover:shadow-2xs' placeholder='Feedback ! for Caption Gen AI' />
            </div>
         </div>
      </div>
   )
}

export default Comment