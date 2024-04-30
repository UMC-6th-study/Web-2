import React, { useState } from 'react';
import './App.css';
import { dummy } from './movieDummy';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function App() {
  return (
    <div className="app-container">
      {dummy.results.map((item, index) => (
        <div key={index} className="movie-container">
          <img src={IMG_BASE_URL + item.poster_path} alt="영화 포스터" />
          <div className="movie-details">
            <h4>{item.title}</h4>
            <span>{item.vote_average}</span>
            <div className="overlay">
              {/* 상세 설명을 여기에 넣어주세요 */}
              <p>{item.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
