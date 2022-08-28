import {useState} from 'react';
import axios from 'axios';


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


        <>
            
            <button type="button"  className="btn btn-outline-primary" onClick={(e) => makeRequest(e)}>Click For Popular Movies</button>

            {data.map((movie, index) => (
                <div  key={index} className="container text-center  movie-container">
                    <div  className="row align-items-start">
                        <div className="col">

                            <h4 >Movie Title: {movie.original_title}</h4>
                            <h5 >Movie id: {movie.id}</h5>
                            <h5>Language:  {movie.original_language}</h5>
                            <p >Overview: {movie.overview}</p>
                            <p >Popularity: {movie.popularity}</p>
                            <p>Date: {movie.release_date}</p>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Movie poster" width="100" height="200"></img>
                        </div>
                    </div>

                </div>
            ))}

        </>
    );
}

export default App