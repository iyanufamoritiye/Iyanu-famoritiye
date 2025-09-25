import HomeSection1 from '@/components/home/HomeSection1';
import HomeSection2 from '@/components/home/HomeSection2';
import React from 'react';


const Home = () => {
  return (
    <div className="p-4 md:p-6 xl:p-16  w-full  ">
      <HomeSection1 />
      <HomeSection2 />
    </div>
  );
};

export default Home;
