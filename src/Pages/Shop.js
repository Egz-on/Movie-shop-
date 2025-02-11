import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

    function Shop() {
        
        const [movies , setMovies ] = useState();
        const [page , setPage] = useState(1)
        const [search , setSearch] = useState()
        
        useEffect(() => {
            
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${page}`)
            .then(response => {
                if(response.status === 200){
                    setMovies(response.data.results)
                }
                }).catch(error => console.log(error))
        }, [page]); 


            const handleSearch = e => { 
                
                const q = e.target.value
                switch(e.keyCode) {
                    case 13:
                        setSearch(q)
                        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&query=${search}`)
                        .then(response => {
                            if(response.status === 200) {
                                setMovies(response.data.results)
                            }
                        }).catch(error => console.log(error))
                        
                    break
                }
            }

    return (
        <section className='py-20'>
        <div className='container mx-auto'>

        <div class="relative w-1/3">
            <input onKeyUp={handleSearch}
            class="w-full bg-transparent placeholder:text-slate-400 text-gray-300 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search by movie name" 
            />
            <Link to="/shop" reloadDocument
            class="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">Clear</Link> 

</div>

            <div className='grid grid-cols-4  gap-4 my-12'>
                {
                    movies && movies.map(movie => <Cart key={movie.id} {...movie}/>)
                }
            </div>
                <div className='flex justify-between'>
                    <button onClick={() => {setPage (page => page - 1)}} className='rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>Prev</button>
                    <button onClick={() => {setPage (page => page + 1)}} className='rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>Next</button>
                </div>
            </div>
    </section>
    )
    }

export default Shop


