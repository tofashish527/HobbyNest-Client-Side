import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto mt-5 mb-5 '>
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;