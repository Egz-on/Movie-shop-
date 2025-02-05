import React from 'react'
import { Link } from 'react-router-dom'

    function Cart({id , title ,backdrop_path ,release_date  }) {
    return (
        
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <div className='h-52 overflow-y-hidden'>
            <img src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} className='rounded-t-lg'/>
        </div>
        <div className='p-5'>
            <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h3>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{release_date}</p>
            <Link to={`/movie/${id}`} className='inline-flex items-center  px-3 py-2 w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'><i class="fa-solid fa-arrow-right"></i></Link>
            
        </div>
        </div>

    )
    }

export default Cart





