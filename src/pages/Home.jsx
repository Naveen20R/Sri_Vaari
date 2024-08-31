import React from 'react';
import Navbar01 from '/src/components/navbar/Navbar01';
import Banner01 from '/src/components/banner/Banner01';
import CardSection01 from '/src/layouts/CardSection01';

function Home() {
  return (
    <>
      <Navbar01 />
      {/* <Banner01/> */}
      <div className="flex justify-center flex-col items-center py-5 bg-white_color">
        <h1 className='font-bold text-[28px] leading-[57.6px] mb-4 line'>Shopes</h1>
        <div className="flex justify-center gap-10 items-center">
          <a href="" className='w-[150px] h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/nivis_boutique_logo.svg" alt="nivis_boutique_logo" />
          </a>
          <a href="" className='w-[150px] h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/sri_vaari_logo.svg" alt="nivis_boutique_logo" />
          </a>
          <a href="" className='w-[150px] h-[150px] rounded-full overflow-hidden'>
            <img src="/src/assets/images/logos/cocoon_logo.svg" alt="nivis_boutique_logo" />
          </a>
        </div>
      </div>
      <CardSection01/>
    </>
  )
}

export default Home;