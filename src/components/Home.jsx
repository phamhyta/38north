import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './layout';

const Home = () => {
  return (
    <div className="w-full">
      <Header className="fixed" />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer className="fixed" />
      </div>
    </div>
  );
};

export default Home;
