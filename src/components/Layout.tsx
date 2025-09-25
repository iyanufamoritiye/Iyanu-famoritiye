import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className=" bg-app-bg min-h-screen font-app-font">
      <Navbar  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
