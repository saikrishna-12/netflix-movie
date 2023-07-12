import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(string,n){
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
}

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => (
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
            <div className= 'card'>
            <img
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={movie.id}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
            <p>{truncate(movie.title || movie.name,15) }</p>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default Row;
