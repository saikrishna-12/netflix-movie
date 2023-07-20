import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './Row.css';
import axios from './axios';
import requests from './request';
import { IoMdClose } from 'react-icons/io';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [selectedMovie, setSelectedMovie] = useState(null);

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

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }

  async function openMediaPlayer(movieId) {
    try {
      const response = await axios.get(requests.fetchMovieTrailer(movieId));
      const trailer = response.data.videos.results.find((video) => video.type === 'Trailer');
      if (trailer) {
        setSelectedMovie(`https://www.youtube.com/watch?v=${trailer.key}`);
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
    }
  }

  function closeMediaPlayer() {
    setSelectedMovie(null);
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => (
          (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) ? (
            <div className='card' key={movie.id}>
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
                onClick={() => openMediaPlayer(movie.id)}
              />
              <p>{truncate(movie.title || movie.name, 15)}</p>
            </div>
          ) : null
        ))}
      </div>
      {selectedMovie && (
        <div className="video-player-container">
        <button className="close-button" onClick={closeMediaPlayer}>
        <IoMdClose size={24} />
            </button>
          <ReactPlayer
            url={selectedMovie}
            controls={true}
            width="100%"
            
            className="video-player"
          />
          
        </div>
      )}
    </div>
  );
}

export default Row;
