import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './components/MainPage';
import PopularPage from './components/PopularPage';

// Router 컴포넌트 이름 변

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <MainPage />
      <Routes>
        <Route path="/" element={<PopularPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
