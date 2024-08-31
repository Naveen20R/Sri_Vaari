import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));

export const appRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Home />,
  },
];
