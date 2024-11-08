// src/pages/HomePage.tsx
import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';
import PointRegistration from '../../components/PointModal/PointRegistration/PointRegistration';




const HomePage: React.FC = () => {
  return (
    <AppLayout> {/* Configura o Layout padrão para página */}
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <PointRegistration  />      {/* teste botão do modal de bater ponto */}      
    </div>
    </AppLayout>
  );
}

export default HomePage;
