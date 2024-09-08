import React from 'react';
import Navbar01 from '/src/components/navbar/Navbar01';
import Banner01 from '/src/components/banner/Banner01';
import CardSection01 from '/src/layouts/CardSection01';
import ExlopreSection from '/src/layouts/ExlopreSection';
import Footer01 from '/src/components/footer/Footer01';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar01 />
      <Banner01/>
      <div className="flex flex-col items-center py-5 bg-white_color">
        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 text-center'>Shopes</h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 items-center">
          <Link to="/nivis-boutique" className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/nivis_boutique_logo.svg" alt="nivis_boutique_logo" className="w-full h-full object-cover" />
          </Link>
          <Link to="/sri-vaari" className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/sri_vaari_logo.svg" alt="sri_vaari_logo" className="w-full h-full object-cover" />
          </Link>
          <Link to="/cocoon" className='w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/cocoon_logo.svg" alt="cocoon_logo" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
      <CardSection01 conditions={{bg:true,title:"Deal Of The Day"}} />
      <CardSection01 conditions={{bg:false,title:"New Collections"}} />
      <ExlopreSection/>
      <Footer01/>
    </>
  )
}

export default Home;