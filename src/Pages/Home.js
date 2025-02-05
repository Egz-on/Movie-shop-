import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cart from '../components/Cart';

    function Home() {
        
        const [movies , setMovies ] = useState();

        useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0`)
            .then(response => {
                if(response.status === 200){
                    setMovies(response.data.results.slice(0,8))}})
            .catch(error => console.log(error))
        }, []);

    return (
<div>
<Swiper
        spaceBetween={50}
        slidesPerView={1}
        
    >
        <SwiperSlide><img className='h-[94vh]  w-full' src='https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/07/Dark.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-[94vh]  w-full' src='https://wallpapers.com/images/high/sherlock-thoughts-word-art-tl4cnhze25t9pbwd.webp'/></SwiperSlide>
        <SwiperSlide><img className='h-[94vh] w-full' src='https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/avengers-chromebook-wallpaper.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-[94vh] w-full ' src='https://c4.wallpaperflare.com/wallpaper/576/838/565/spiderman-4k-artwork-hd-wallpaper-preview.jpg'/></SwiperSlide>
        
    </Swiper>

    <section className='py-20'>
        <div className='container mx-auto'>
            <h2 className='text-3xl text-center font-bold text-gray-600 '>
                Latest Movie
            </h2>
            <div className='grid grid-cols-4  gap-4 my-12'>
                {
                    movies && movies.map(movie => <Cart key={movie.id} {...movie}/>)
                }
            </div>
            <Link to="/shop" className='w-[200px] block mx-auto text-center py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Explore more
            <i className="fa-solid fa-arrow-right"></i>
            </Link>
            </div>
    </section>
</div>


    )
}

export default Home