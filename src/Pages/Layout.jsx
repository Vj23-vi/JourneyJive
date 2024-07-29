import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import OrderPopup from "../Components/Popup/Popup";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Outlet />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </>
  );
};

export default Layout;
