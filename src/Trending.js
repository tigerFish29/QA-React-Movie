import { useState } from "react";
import axios from "axios";

const Trending = () => {
    const [trending, setTrending] = useState([]);


// making the request 
const makeRequest = (e) => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=3daca8529f336b87de3f5766a67323b3`)
    .then(response => {
        let trending = response.trending;
        setTrending(trending.results)
        console.log(trending.results)
    })
}

return (
    <>
    <div>
        <h1>Top Movies & TV Shows</h1>
        <button type="button" onClick={(e) => makeRequest(e.target.value)}>Most Popular TV & Movies </button>
    </div>
    </>
)


}

export default Trending; 