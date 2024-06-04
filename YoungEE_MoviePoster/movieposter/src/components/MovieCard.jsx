import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
  width: calc(25% - 16px); /* Adjust width to fit four cards in a row */
  margin: 0 8px 16px; /* Add some margin between cards */
  display: inline-block; /* Display cards inline */
  position: relative; /* Position for hover effect */

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 1200px) {
    width: calc(33.33% - 16px); /* Adjust width to fit three cards in a row */
  }

  @media (max-width: 900px) {
    width: calc(50% - 16px); /* Adjust width to fit two cards in a row */
  }

  @media (max-width: 600px) {
    width: 100%; /* Full width for mobile */
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1; /* Show on hover */
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Rating = styled.span`
  font-size: 14px;
`;

const Overview = styled.p`
  font-size: 14px;
`;

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, vote_average } = movie;
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <Card>
      <Image src={IMG_BASE_URL + poster_path} alt="Movie Poster" />
      <Content>
        <Title>{title}</Title>
        <Rating>평점: {vote_average}</Rating>
        <Overview>{overview}</Overview>
      </Content>
    </Card>
  );
};

export default MovieCard;
