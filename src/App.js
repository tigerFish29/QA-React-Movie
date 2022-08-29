import {useState} from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom"
  
import Trending from "./Trending"
import './App.css';


const App = () => {
    const [data,setData]= useState([]);

    const makeRequest =(e) => {
        axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=3daca8529f336b87de3f5766a67323b3&language=en-US&page=1`)
            .then(response => {
                let data = response.data;

                setData(data.results);
                console.log(data.results)

            });
    };

    return (

           
    
           <div>

            <Routes>
                <Route exact path="/trends" element={<Trending />}></Route>
            </Routes>
            <h1>Top Movies In the World Right Now</h1>
            <button type="button"  className="btn btn-outline-primary btn-lg" onClick={(e) => makeRequest(e)}>Click For Popular Movies</button>

            {data.map((movie, index) => (
                <div  key={index} className="container text-center  movie-container">
                    <div  className="row align-items-start">
                        <div className="col">

                            <h4 className="display-4">Movie Title: {movie.original_title}</h4>
                            <h5 className="display-5">Movie id: {movie.id}</h5>
                            <h5 className="display-5">Language:  {movie.original_language}</h5>
                            <p className="lead">Overview: {movie.overview}</p>
                            <p className="blockquote">Popularity: {movie.popularity}</p>
                            <p className="blockquote">Date: {movie.release_date}</p>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie poster" width="100" height="200"></img>
                        </div>
                    </div>

                </div>
            ))}
            </div>
      
        
    );
}

export default App