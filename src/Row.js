import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl,isLargeRow}) {
    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
       //내가 로드하고 싶은거를 로드함 => api를 통해서
        // if [], run once when the row loads, and dont run again
        //only on page load.
        async function fetchData() {
            const request = await axios.get(fetchUrl); //이 부분의 경우 fetchUrl은 Requests.js에서 한번 경유하고, axios.js에서 완전한 api 링크가 되는 듯 하다
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick= (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        } else{
            movieTrailer(movie?.name||"")
                .then(url=>{
                    const urlParams =new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                }).catch((error)=>console.log(error));
        }
    };

    return(
        <div>

            <h2>{title}</h2>
            <div className="row_posters">
                {/*포스터가 표시됨*/}
                {movies.map((movie)=>(
                    <img
                        key={movie.id}
                        onClick={()=> handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                        alt={movie.name}
                    />

                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
         </div>
    )
}

export default Row;
