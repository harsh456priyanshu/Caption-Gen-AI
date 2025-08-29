import bgImage from '../assets/Images/alexander-grey-fSlCxR0dnZY-unsplash.jpg';
import LogoutButton from '../components/LogoutButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useImageContext } from '../context/ImageContext';



const Home = () => {
    const navigate = useNavigate();
    const { 
        globalSelectedFile, setGlobalSelectedFile,
        globalImagePreview, setGlobalImagePreview,
        globalCaption, setGlobalCaption 
    } = useImageContext();
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
       
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
        
        setGlobalSelectedFile(file);
        setGlobalImagePreview(URL.createObjectURL(file));
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
                setGlobalCaption(res.data.post.caption);
            } else {
                setGlobalCaption("No caption was generated.");
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
                <h1 className='flex flex-col sm:flex-row items-center text-3xl sm:text-4xl md:text-5xl font-serif text-green-950 font-extrabold text-center'>
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
                        {globalImagePreview && (
                            <div className="mt-4">
                                <img 
                                    src={globalImagePreview} 
                                    alt="Selected" 
                                    className="max-w-sm rounded-lg shadow-lg mx-auto"
                                    style={{ maxHeight: '300px', objectFit: 'contain' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                {globalCaption && (
                    <div className="mt-6 p-4 bg-green-200 bg-opacity-80 rounded-lg shadow-lg max-w-md w-full">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-800 flex-grow text-center">{globalCaption}</p>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(globalCaption);
                                    // You could add a toast notification here if you want
                                }}
                                className="ml-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                title="Copy caption"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <LogoutButton onLogout={handleLogout} />
        </div>
    );
}

export default Home