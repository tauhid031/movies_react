import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// eb5bad0e
const API_URL='http://www.omdbapi.com?apikey=eb5bad0e';

// const movie1={
    
//         "Title": "Amazing Spiderman Syndrome",
//         "Year": "2012",
//         "imdbID": "tt2586634",
//         "Type": "movie",
//         "Poster": "N/A"
    
// }

const App=()=>
{   
    const[searchTerm , setSearchTerm]=useState(""); 
    const[movies, setMovies] =useState([]);  //this is going to give the access of the set movies ,setter function
    
    useEffect( ()=>{
        searchMovies('spiderman');
        } , [])
    const searchMovies = async (title) =>{ 
    
        const response= await fetch(`${API_URL}&s=${title}`);

        const data=await response.json();
        setMovies(data.Search);
        console.log(data.Search);
    };
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">

                <input
                placeholder="search for movies"
                value={searchTerm}
                onChange ={ (e) => setSearchTerm(e.target.value)}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)
                }
                />

            </div>
             {
                 movies?.length >0 ? (
                    <div className="container">
             
                    {
                    /* <MovieCard movie1={movies[0]}/>  this is going to allow us to populate the movies */
                    movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))
                    }
       
                   </div>
                 ) : (<div className="empty">
                     <h2>No Movies Found</h2>
                     </div>)


             }
            

        </div>
     );
}

 

   
export default App;