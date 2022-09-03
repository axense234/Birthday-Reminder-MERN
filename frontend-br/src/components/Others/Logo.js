import React, { useState } from "react";
import { RiCake2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Logo = () => {
  const [stylingColor, setStylingColor] = useState("#A64AC9");
  return (
    <Link
      className="logo"
      to="/"
      onMouseOver={() => setStylingColor("#FCCD04")}
      onMouseLeave={() => setStylingColor("#A64AC9")}
    >
      <RiCake2Line id="logo-icon" style={{ color: stylingColor }}></RiCake2Line>
      <h1 style={{ color: stylingColor }}>Birthday Reminder</h1>
    </Link>
  );
};

export default Logo;
