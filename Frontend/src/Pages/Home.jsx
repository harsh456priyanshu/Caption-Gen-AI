import bgImage from '../assets/Images/jonas-degener-J9RFnXJ12TQ-unsplash.jpg';



const Home = () => {
    return (
        <div
            className='flex flex-col min-h-screen'
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='flex items-center justify-center w-full bg-opacity-60 h-80'>
                <h1 className='flex items-center text-5xl font-serif text-green-700 font-extrabold'>
                    <span className='text-black'>Hello,</span> welcome To capti <span className='text-white'>on gen AI</span>
                </h1>
            </div>

            

            
        </div>
    )
}

export default Home