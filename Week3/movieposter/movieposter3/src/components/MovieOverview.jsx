import React from 'react';

const MovieOverview = ({ title, overview }) => {
  return (
    <div className="movie-overview">
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieOverview;
