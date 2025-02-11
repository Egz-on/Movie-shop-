
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

    const Login = () => {

        const [user, setUser] = useLocalStorage("user", []);
        const [isLoggedIn  , setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
        const navigate = useNavigate();

            useEffect(() => {
                if(isLoggedIn) 
                    navigate('/')
            },[])
    
    const handleLogin = (e) => {
        e.preventDefault();
        const data = e.target
        
        const email = data['email'].value
        const password = data['password'].value
        
        if(user.length > 0) {
            const userExist = user.filter(user => user.email === email && user.password === password)
            if(userExist.length > 0 ) {
            setIsLoggedIn(true)
            setUser(email)
            navigate('/')
            }else {
                alert('Invalid email or password')
            }
        } else {
            alert('You need to register first')
        }}

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
            Login
            </h2>
            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block text-gray-400">Email</label>
                <input
                type="email"
                name="email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-400">Password</label>
                <input
                name="password"
                type="password" 
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                
                />
            </div>
            <button  type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded mt-4">
                Log in
            </button>
            </form>

            <p className="text-center text-gray-400 mt-4">
            Please register first if you don't have an account. Click{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
                here
            </Link>
            </p>
        </div>
        </div>
    );
    };

export default Login;
