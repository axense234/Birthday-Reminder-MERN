// React
import React, { useEffect } from "react";
// Components
import Logo from "./Others/Logo";
import NotificationsModal from "./Modals/NotificationsModal";
import OfflineModal from "./Modals/OfflineModal";
import NotLoggedIn from "./Navbar/NotLoggedIn";
import LoggedIn from "./Navbar/LoggedIn";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarSlider from "./Navbar/NavbarSlider";
// Global Context
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { jwtToken, showNotificationsModal } = useGlobalContext();
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);
  return (
    <div className='nav-container'>
      <nav>
        <Logo />
        <div className='buttons-nav'>
          {!jwtToken ? <NotLoggedIn /> : <LoggedIn />}
        </div>
        <NavbarMenu />
      </nav>
      {showNotificationsModal && Notification.permission !== "granted" ? (
        <NotificationsModal />
      ) : (
        navigator.onLine || <OfflineModal />
      )}
      <NavbarSlider />
    </div>
  );
};

export default Navbar;
