import React from 'react'
import { Link } from 'react-router-dom'

    function Nav() {
        const handleSignout = e => {
            e.preventDefault()

        }
    return (
        <>
            <header className="h-24 flex items-center bg-slate-200">
        <div className="container mx-auto flex items-center justify-between">
            <span className="text-3xl text-gray-500"><i className="fa-solid fa-film"></i> Movie Shop</span>
            <nav>
                <ul className="flex items-center gap-4">
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/">Home</Link></li>
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/shop">Shop</Link></li>
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/card">Card</Link></li>
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/dashboard">Dashboard</Link></li>
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/login">Login</Link></li>
                    <li className='font-bold text-gray-600 hover:text-blue-700'><Link to="/register">Register</Link></li>
                    <li> <a href="#" onClick={handleSignout}><i className="fa-solid fa-right-from-bracket"></i></a></li>
                    
                    
                </ul>
            </nav>
        </div>
    </header>
        </>
    )
    }

export default Nav