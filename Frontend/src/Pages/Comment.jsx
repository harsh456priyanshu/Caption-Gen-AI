
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
         <div className='flex flex-col lg:flex-row px-4 md:px-6 lg:px-8 gap-6 mt-10 md:mt-16 lg:mt-20'>
            <div className='flex justify-center lg:justify-start w-full lg:w-1/2'>
               <h1 className='text-center lg:text-left text-xl md:text-2xl lg:text-3xl font-serif text-yellow-400 font-extrabold'>
                  <span className='text-white block lg:inline'> People who loves use </span>
                  <span className='block lg:inline'> To caption gen AI for social Media!</span>
               </h1>
            </div>
            <div
               className='flex flex-col w-full lg:w-1/2 px-4 md:px-6 mb-6 lg:mb-10'
               onMouseEnter={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}
            >
               <input 
                  type="text" 
                  className='w-full bg-green-400 text-black p-4 md:p-6 rounded text-sm md:text-base outline-none placeholder-black/70'
                  placeholder='Feedback ! for Caption Gen AI' />
            </div>
         </div>
      </div>
   )
}

export default Comment