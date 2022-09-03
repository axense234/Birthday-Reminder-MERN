import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
  return (
    <>
      <Link to="/reminders">Reminders</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </>
  );
};

export default NotLoggedIn;
