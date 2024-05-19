import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link import

const NavContainer = styled.nav`
  background-color: #191B3A;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Title = styled.h1`
  color: #fff;
  margin-left: 20px;
  font-size: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 20px;
  padding: 0;

  li {
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const Header = () => {
  return (
    <NavContainer>
      <Title>UMC MOVIE</Title>
      <Menu>
        <li className="signup">회원가입</li>
        <li className="popular">Popular</li>
        <li className="nowplaying">Now Playing</li>
        <li className="toprated">Top Rated</li>
        <li className="upcoming">Upcoming</li>
      </Menu>
    </NavContainer>
  );
};

export default Header;
