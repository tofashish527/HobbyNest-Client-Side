import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;