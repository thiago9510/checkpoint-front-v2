// src/pages/NotFoundPage.tsx
import React from 'react';
import svg from "../../assets/404.svg"
import './NotFundPage.css'
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  
  const handleButtonClick = () => {
    navigate('/')
  }

  return (
    <div className='cont-404'>
      <img src={svg} alt="svg" />
      <button onClick={handleButtonClick} >Back to Home</button>
    </div>
  );
}

export default NotFoundPage;
