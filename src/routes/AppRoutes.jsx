import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';


function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    )
}

export default AppRoutes