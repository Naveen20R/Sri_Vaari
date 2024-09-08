import FilterSection from '/src/layouts/FilterSection';
import Navbar01 from '/src/components/navbar/Navbar01'
import React from 'react';
import Footer01 from '/src/components/footer/Footer01';



function FilterProduct() {
    return (
        <>
            <Navbar01 />
            <FilterSection />
            <Footer01/>
        </>
    )
}

export default FilterProduct