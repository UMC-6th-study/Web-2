// PopularPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const PopularPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            language: 'ko',
            page: 1,
            region: 'KR',
            api_key: '41b11920d4e93b17f6df78d77da5135f'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-container">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
