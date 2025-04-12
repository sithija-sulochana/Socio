import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Use 'react-router-dom'
import RootLayout from '@/layouts/root-layout.layout'; // Use proper casing
import MainLayout from '@/layouts/main.layout'; // Assuming MainLayout is another layout component
import HomePage from '@/pages/homePage'; // Capitalized HomePage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Root Layout (this will be the default layout, if needed) */}
        <Route element={<RootLayout />}>
          {/* Main layout (this can be nested under RootLayout) */}
          <Route element={<MainLayout />}>
            {/* Route for your main app */}
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
