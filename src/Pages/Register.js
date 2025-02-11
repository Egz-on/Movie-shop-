    import React, { useState } from "react";
import { Link } from "react-router-dom";

    const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user") !== null ? JSON.parse(localStorage.getItem("user")) : [];

        if (password !== confirmPassword) {
        alert("Passwords must match");
        } else {
        if (user.length > 0) {
            const userExist = user.filter((u) => u.email === email);
            if (userExist.length) {
            alert(`${email} is already registered`);
            } else {
            localStorage.setItem("user", JSON.stringify([...user, { email, password }]));
            alert("Account was created successfully");
            window.location.href = "http://localhost:3000/Login";
            }
        } else {
            localStorage.setItem("user", JSON.stringify([{ email, password }]));
            alert("Account was created successfully");
            window.location.href = "http://localhost:3000/Login";
        }
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
            <form onSubmit={handleRegister}>
            <div className="mb-4">
                <label className="block text-gray-400">Email</label>
                <input
                type="email"
                name="email"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-400">Password</label>
                <input
                type="password"
                name="password"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-400">Confirm Password</label>
                <input
                type="password"
                name="password2"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded mt-4">
                Sign Up
            </button>
            </form>
            <p className="text-center text-gray-400 mt-4">
            Already have an account? 
            <Link to="/login" className="text-blue-400 hover:underline"> Login here</Link>
            </p>
        </div>
        </div>
    );
    };

    export default Register;
