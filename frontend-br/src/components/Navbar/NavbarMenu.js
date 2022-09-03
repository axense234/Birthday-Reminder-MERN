import React from "react";
// React Icons
import { FiMenu } from "react-icons/fi";
import { useGlobalContext } from "../../context";

const NavbarMenu = () => {
  const { showSlider, setShowSlider } = useGlobalContext();
  return (
    <button
      className="navbar-menu"
      aria-label="Open Navbar"
      onClick={() => {
        console.log(showSlider);
        setShowSlider(!showSlider);
      }}
    >
      <FiMenu />
    </button>
  );
};

export default NavbarMenu;
