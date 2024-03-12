import React from 'react';
import Footer from './components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

function Layout() {
    return (
        <div>
            <Header/>
            <Outlet />  
            <Footer />
        </div>
    );
}

export default Layout;
