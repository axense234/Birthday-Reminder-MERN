import React from "react";
import { RiCake2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <RiCake2Line id="logo-icon"></RiCake2Line>
      <h1>Birthday Reminder</h1>
    </Link>
  );
};

export default Logo;
