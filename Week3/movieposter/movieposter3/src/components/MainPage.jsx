import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    background-color: black;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerText = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: bolder;
`;

const MainPage = () => {
    return (
        <Banner>
            <BannerText>환영합니다!</BannerText>
        </Banner>
    );
};

export default MainPage;
