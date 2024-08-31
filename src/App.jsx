import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/MainRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';


const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
