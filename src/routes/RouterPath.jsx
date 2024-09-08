import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const WishList = lazy(() => import('../pages/WishList'));
const ItemsDetail = lazy(() => import('../pages/ProductDetail'));
const Login = lazy(() => import('../pages/Login'));
const Razorpay = lazy(() => import('../pages/Razorpay'));
const SignUp = lazy(() => import('../pages/SignUp'));
const FilterProduct = lazy(() => import('../pages/FilterProduct'));

export const appRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Home />,
  },
  {
    path: '/wishList',
    name: 'root',
    element: <WishList />,
  },
  {
    path: '/productDetail',
    name: 'root',
    element: <ItemsDetail />,
  },
  {
    path: '/Login',
    name: 'root',
    element: <Login />,
  },
  {
    path: '/Razorpay',
    name: 'root',
    element: <Razorpay />,
  }, 
  {
    path: '/SignUp',
    name: 'root',
    element: <SignUp/>,
  }, 
  {
    path: '/:name',
    name: 'root',
    element: <FilterProduct/>,
  }, 

];
