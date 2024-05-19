// NowPlayingPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const API_URL = `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1&region=KR`;

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Now Playing</h1>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default NowPlayingPage;
