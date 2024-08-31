import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './RouterPath.jsx'; // Import the routes configuration

function MainRoute() {
  return (
    <Routes>
      {appRoutes.map(({ path, element, name }) => (
        <Route key={name} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default MainRoute;
