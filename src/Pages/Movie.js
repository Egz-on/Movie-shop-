import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from '../components/Modal';

function Movie() {
    const { id } = useParams();
    const [movies, setMovies] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage('user', false);
    const [cart, setCart] = useLocalStorage('cart', []);
    const [Openmodul , setOpenmodul] = useState(false)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => console.log(error));
    }, [id]);

    const handleADDToCart = (e) => {
        e.preventDefault();
        const data = e.target.elements;
        const qty = parseInt(data['qty'].value, 10);

        if (cart.some(item => item.id === movies.id)) {
            setCart(cart.map(item =>
                item.id === movies.id ? { ...item, qty: item.qty + qty } : item
            ));
        } else {
            setCart([...cart, { id: movies.id, title: movies.original_title, qty }]);
        }
    };

    return (
        <>
            {movies && (
                <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6">
                    <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <img
                            src={movies.backdrop_path ? `http://image.tmdb.org/t/p/w500${movies.backdrop_path}` : 'https://via.placeholder.com/500'}
                            alt={movies.original_title}
                            className="w-full md:w-1/2 object-cover"
                        />
                        <div className="p-6 md:w-1/2">
                            <h2 className="text-3xl font-bold mb-4">{movies.original_title}</h2>
                            <p className="text-gray-300 mb-4">{movies.overview}</p>
                            <div className="bg-gray-700 p-4 rounded-lg mb-4">
                                <p><span className="font-semibold">Release date: </span> {movies.release_date}</p>
                                <p><span className="font-semibold">Popularity: </span> {movies.popularity}</p>
                                <p><span className="font-semibold">Votes: </span>{movies.vote_count}</p>
                            </div>
                            {isLoggedIn ? (
                                <form method="POST" onSubmit={handleADDToCart}>
                                    <input
                                        type="number"
                                        name="qty"
                                        max="100"
                                        min="1"
                                        defaultValue="1"
                                        className="bg-gray-900 text-white rounded-lg p-2 mr-3"
                                    />
                                    <button 
                                    onClick={() => setOpenmodul(true)}
                                    className="text-gray-200 px-3 py-2 text-sm font-medium  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                                    {
                                        Openmodul && <Modal closeModal={setOpenmodul} />
                                    }
                                </form>
                            ) : (
                                <p className="text-gray-400">
                                    Please <Link to="/login" className="text-blue-400 hover:underline">login</Link> first.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Movie;
