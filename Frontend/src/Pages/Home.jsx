import bgImage from '../assets/Images/linus-belanger-N_yjGWotRaE-unsplash.jpg';
import LogoutButton from '../components/LogoutButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Home = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/auth/check', {
                    withCredentials: true
                });
                setIsAuthenticated(true);
            } catch (err) {
                navigate('/login');
            }
        };
        checkAuth();
    }, [navigate]);


    const handleFileChange = async (e) => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }

        const file = e.target.files[0];
        if (!file) return;
        
        setSelectedFile(file);
        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);
        
        try {
            const res = await axios.post('http://localhost:3000/api/posts/', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.data && res.data.post && res.data.post.caption) {
                setCaption(res.data.post.caption);
            } else {
                setCaption("No caption was generated.");
            }
        } catch (err) {
            console.error('Error:', err);
            setCaption("Error generating caption: " + (err.response?.data?.message || err.message));
        }
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) return;

        try {
            const res = await axios.post('http://localhost:3000/api/post/', formData, {
                withCredentials: true,
                headers: { 'content-Type': 'multipart/form-data' }
            });
            setCaption(res.data.caption);
        } catch (err) {
            setCaption("Error generating caption.");
        }
        setLoading(false);
    };



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
            <div className='flex flex-col items-center justify-center w-full bg-opacity-60 min-h-[20rem] px-4 py-8'>
                <h1 className='flex flex-col sm:flex-row items-center text-3xl sm:text-4xl md:text-5xl font-serif text-black font-extrabold text-center'>
                   Hello,welcome To caption gen AI
                </h1>
                <div className="w-full max-w-md mt-8 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center space-y-4">
                        {isAuthenticated ? (
                            <input
                                type="file"
                                placeholder='Place the Image Here'
                                className='backdrop-blur w-full max-w-sm p-3 rounded border-4 focus:outline-none focus:border-green-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100'
                                onChange={handleFileChange}
                            />
                        ) : (
                            <div className="text-white text-center p-4 bg-black bg-opacity-50 rounded">
                                Please <button onClick={() => navigate('/login')} className="text-green-400 hover:text-green-500">login</button> to generate captions
                            </div>
                        )}
                        {loading && (
                            <div className="text-black font-semibold">
                                Generating caption...
                            </div>
                        )}
                    </div>
                </div>
                {caption && (
                    <div className="mt-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md w-full">
                        <p className="text-gray-800 text-center">{caption}</p>
                    </div>
                )}
            </div>
            <LogoutButton onLogout={handleLogout} />
        </div>
    );
}

export default Home