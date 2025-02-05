import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

    function Shop() {
        
        const [movies , setMovies ] = useState();
        
        useEffect(() => {
            
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`)
            .then(response => {
                if(response.status === 200){
                    setMovies(response.data.results.slice(0,8))}})
            .catch(error => console.log(error))
        }, []);
    return (
        <section className='py-20'>
        <div className='container mx-auto'>
        <div className=''>
            <input className='border border-gray-400 w-1/4 py-2 ' type='search' placeholder='Search...'  />
            <Link to="/shop" className=' p-2 ml-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Clear</Link>
        </div>
        <div className='flex justify-between my-4'>
            <button className='text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-2 py-1'>Prev</button>
            <button className='text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-2 py-1'>Next</button>
        </div>
            <div className='grid grid-cols-4  gap-4 my-12'>
                {
                    movies && movies.map(movie => <Cart key={movie.id} {...movie}/>)
                }
            </div>

            </div>
    </section>
    )
    }

export default Shop