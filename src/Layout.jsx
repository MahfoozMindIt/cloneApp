import React from "react";
import Header from "./components/header/Header";
import PlatformHeader from "./components/headerForPlatform/PlatformHeader";
import Footer from "./components/Footer";
import { Outlet,useLocation } from "react-router-dom";
import FooterPlatform from './components/FooterPlatform'


const layout = () => {
  const location = useLocation();
  const specialPage = location.pathname === '/platform'
  return (
    <div>
      {specialPage? <PlatformHeader></PlatformHeader>:<Header></Header>}
      <Outlet></Outlet>
      {specialPage? <FooterPlatform></FooterPlatform>:<Footer></Footer>}
    </div>
  );
};

export default layout;
