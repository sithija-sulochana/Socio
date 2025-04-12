// main.layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <header>
        
        {/* Add any other header content you need */}
      </header>
      <main>
        {/* Render child routes inside this layout */}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
