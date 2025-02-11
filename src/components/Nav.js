import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
    const [user, setUser] = useLocalStorage('user', '');
    const navigate = useNavigate();

    const handleSignout = e => {
        setIsLoggedIn(false);
        setUser('');
        navigate('/');
    };

    return (
        <>
            <nav className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 text-gray-300 shadow-lg">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-2xl font-bold flex items-center">
                            <svg
                                className="w-6 h-6 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10l9-7 9 7-9 7-9-7z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 10l9 7 9-7M9 21V10l-6 5m12 0l6-5V21"
                                />
                            </svg>
                            Movie Shop
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-gray-400">
                            Home
                        </Link>
                        <Link to="shop" className="hover:text-gray-400">
                            Shop
                        </Link>
                        <Link to="card" className="hover:text-gray-400">
                            Card
                        </Link>
                    </div>

                    {isLoggedIn ? (
                        <div className="hidden md:flex space-x-4">
                            <button onClick={handleSignout} className="hover:text-gray-400">
                                Signout
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex space-x-4">
                            <Link to="Login" className="hover:text-gray-400">
                                Login
                            </Link>
                            <Link to="Register" className="hover:text-gray-400">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Nav;