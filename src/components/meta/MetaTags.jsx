import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description, keywords }) => (
    <Helmet>
        <title>Home Page</title>
        <meta name="description">Home Page Description</meta>  {/* content={description} */}
        <meta name="keywords">Home page Keywords</meta>
    </Helmet>
);

export default MetaTags;
