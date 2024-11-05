// src/pages/HomePage.tsx
import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';

const HomePage: React.FC = () => {
  return (
    <AppLayout> {/* Configura o Layout padrão para página */}
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
    </AppLayout>
  );
}

export default HomePage;
