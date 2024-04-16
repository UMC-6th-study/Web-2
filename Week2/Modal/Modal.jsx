import React from 'react';

const Modal = ({ onClose, isOpen }) => {
  return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>안녕하세요</h2>
          <p>모달 내용은 어쩌고 저쩌고...</p>
          <div class="b1"><button onClick={onClose}>닫기</button></div>
        </div>
      </div>
    </>
  );
};

export default Modal;
