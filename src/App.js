import {useState} from 'react';
import axios from 'axios';

const App = () => {
    const [data,setData]= useState("");



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
            <div>
                <h2>Popular Movies</h2>
            </div>
            <button type="button"  className="d-grid gap-2 col-6 mx-auto btn btn-primary" onClick={(e) => makeRequest(e)}>Popular Movies</button>

            {data.map((movie, index) => (
                <div className="container-fluid" key={index}>
                    <div className="card">
                        <div className="card-body">

                            <h4 >Movie Title: {movie.original_title}</h4>
                            <h5 >Movie id: {movie.id}</h5>

                            <h5>Language:  {movie.original_language}</h5>
                            <p >Overview: {movie.overview}</p>
                            <p >Popularity: {movie.popularity}</p>
                            <p>Date: {movie.release_date}</p>
                        </div>
                    </div>

                </div>
            ))}

        </>
    );
}

export default App