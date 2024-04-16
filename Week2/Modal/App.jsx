import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <h1 style={{ fontWeight: 'bold' }}>안녕하세요!</h1>
      <p>내용내용내용</p>
      <div class="b2"><button onClick={toggleModal}>버튼 열기</button></div>
      <Modal onClose={toggleModal} isOpen={modalOpen} />
    </div>
  );
};

export default App;
