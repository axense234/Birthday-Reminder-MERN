// React
import React, { useState } from "react";
// React Icons
import { RiCake2Line } from "react-icons/ri";
// React Router
import { Link } from "react-router-dom";

const Logo = () => {
  const [stylingColor, setStylingColor] = useState("black");
  return (
    <Link
      className='logo'
      to='/'
      onMouseOver={() => setStylingColor("#FCCD04")}
      onMouseLeave={() => setStylingColor("black")}
    >
      <RiCake2Line id='logo-icon' style={{ color: stylingColor }} />
      <h1 style={{ color: stylingColor }}>Birthday Reminder</h1>
    </Link>
  );
};

export default Logo;
