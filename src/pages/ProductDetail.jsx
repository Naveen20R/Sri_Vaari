import ProductOverview from '/src/layouts/ProductOverview'
import Navbar01 from '/src/components/navbar/Navbar01'
import React from 'react'
import CardSection01 from '/src/layouts/CardSection01';
import Footer01 from '/src/components/footer/Footer01';

function ProductDetail() {
  return (
    <>
     <Navbar01/>
     <ProductOverview/>
     <CardSection01 conditions={{bg:false,title:"Related Products"}}  />
     <Footer01/>
    </>
  )
}

export default ProductDetail