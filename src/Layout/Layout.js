import React from 'react';
import {Outlet} from "react-router-dom";

import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './LayoutStyle.css';

const Layout = () => {
    return (
        <div className={'layout'}>
            <div className={'sideBar'}><SideBar/></div>

            <div className={'HedOutFoot'}>
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;