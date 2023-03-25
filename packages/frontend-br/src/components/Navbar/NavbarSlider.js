// React
import React, { useEffect } from "react";
// React Router
import { Link } from "react-router-dom";
// Context
import { useGlobalContext } from "../../context";
// Data
import { navbarSliderPageLinks } from "../../data";

const NavbarSlider = () => {
  const { NavbarSliderRef, showSlider, setShowSlider } = useGlobalContext();

  useSliderTransition(showSlider, NavbarSliderRef);

  return (
    <div className='navbar-slider-container' ref={NavbarSliderRef}>
      {navbarSliderPageLinks.map((pageLink) => {
        return (
          <Link
            key={pageLink.id}
            to={pageLink.dest}
            title={pageLink.label}
            onClick={() => setShowSlider(!showSlider)}
          >
            {pageLink.label}
          </Link>
        );
      })}
    </div>
  );
};

const useSliderTransition = (show, compRef) => {
  useEffect(() => {
    let slider = compRef.current;
    if (show) {
      slider.style.visibility = "visible";
      slider.style.height = "30rem";
    } else if (!show) {
      slider.style.height = "0";
      let timeout = setTimeout(() => {
        slider.style.visibility = "hidden";
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show, compRef]);
};

export default NavbarSlider;
