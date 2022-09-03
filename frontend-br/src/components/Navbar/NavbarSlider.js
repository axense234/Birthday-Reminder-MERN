import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const NavbarSlider = () => {
  const { NavbarSliderRef, showSlider, setShowSlider } = useGlobalContext();

  useEffect(() => {
    let slider = NavbarSliderRef.current;
    if (showSlider) {
      slider.style.visibility = "visible";
      slider.style.height = "30rem";
    } else if (!showSlider) {
      slider.style.height = "0";
      let timeout = setTimeout(() => {
        slider.style.visibility = "hidden";
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showSlider, NavbarSliderRef]);

  return (
    <div className="navbar-slider-container" ref={NavbarSliderRef}>
      <Link to="/" onClick={() => setShowSlider(!showSlider)}>
        Home Page
      </Link>
      <Link to="/reminders" onClick={() => setShowSlider(!showSlider)}>
        Reminders
      </Link>
      <Link to="/profile" onClick={() => setShowSlider(!showSlider)}>
        Profile
      </Link>
      <Link to="/signup" onClick={() => setShowSlider(!showSlider)}>
        Signup
      </Link>
      <Link to="/login" onClick={() => setShowSlider(!showSlider)}>
        Login
      </Link>
    </div>
  );
};

export default NavbarSlider;
