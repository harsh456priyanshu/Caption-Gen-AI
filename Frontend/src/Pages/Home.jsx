import bgImage from '../assets/Images/jonas-degener-J9RFnXJ12TQ-unsplash.jpg';
import LogoutButton from '../components/LogoutButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const Home = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true });
        } catch (err) {
            // Optionally handle error
        }
        navigate('/login');
    };

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
            <div className='flex flex-col items-center justify-center w-full bg-opacity-60 h-80'>
                <h1 className='flex items-center text-5xl font-serif text-green-700 font-extrabold'>
                    <span className='text-black'>Hello,</span> welcome To capti <span className='text-white'>on gen AI</span>
                </h1>
                <form action="">
                    <input type="text" placeholder='Place the Image Here' className='backdrop-blur h-15 w-70 p-2 items-start rounded border-4 mt-6' />
                </form>
            </div>
            <LogoutButton onLogout={handleLogout} />
        </div>
    );
}

export default Home