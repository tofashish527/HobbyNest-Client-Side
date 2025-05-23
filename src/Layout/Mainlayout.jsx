import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Spinner from '../Component/Spinner';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='max-w-7xl mx-auto mt-5 mb-5 '>
                {navigation.state === "loading" && <Spinner />}
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;