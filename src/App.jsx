// src/App.jsx

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
