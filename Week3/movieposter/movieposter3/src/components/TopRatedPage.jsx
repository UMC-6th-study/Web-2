// src/components/TopRatedPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_KEY = '41b11920d4e93b17f6df78d77da5135f'; // 여기에 실제 TMDb API 키를 입력하세요

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const MovieCard = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
`;

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top rated movies', error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <MovieList>
      {movies.map(movie => (
        <MovieCard key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </MovieCard>
      ))}
    </MovieList>
  );
};

export default TopRatedPage;
