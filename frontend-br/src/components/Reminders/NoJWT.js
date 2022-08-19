import React from "react";

// Components
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const NoJWT = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="no-jwttoken-reminders">
        <Link to="/signup">Sign Up</Link>
        or
        <Link to="/login">Login</Link>
        to have access to Reminders!
      </div>
      <Footer></Footer>
    </>
  );
};

export default NoJWT;
