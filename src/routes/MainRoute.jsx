import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { appRoutes } from './RouterPath'; // Import the routes configuration
import Loading from '/src/pages/Loading'; // Import the loading component

function MainRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {appRoutes.map(({ path, element, name }) => (
          <Route key={name} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default MainRoute;
