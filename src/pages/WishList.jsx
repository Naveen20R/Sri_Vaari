import WishListSection from '/src/layouts/WishListSection';
import Navbar01 from '/src/components/navbar/Navbar01'
import React from 'react';
import Footer01 from '/src/components/footer/Footer01';



function WishList() {
    return (
        <>
            <Navbar01 />
            <WishListSection />
            <Footer01/>
        </>
    )
}

export default WishList