import React from "react";
import Logo from "./Others/Logo";
import { Link } from "react-router-dom";
// Global Context
import { useGlobalContext } from "../context";
// React Icons
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { profile, jwtToken, handleLogout, handleGetProfile } =
    useGlobalContext();
  return (
    <nav>
      <Logo></Logo>
      <div className="buttons-nav">
        {!jwtToken ? (
          <>
            <Link to="/reminders">Reminders</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            {/* Reminders Link */}
            <Link to="/reminders">Reminders</Link>
            {/* Sign up Link */}
            <Link to="/signup">Sign Up</Link>
            {/* Logout link */}
            <button id="logout-btn" onClick={() => handleLogout()}>
              Logout
            </button>
            {/* Profile Link */}
            <Link
              className="profile-container"
              to="/profile"
              onClick={() => handleGetProfile()}
            >
              {profile.imageSecureUrl ? (
                <img
                  src={profile.imageSecureUrl}
                  alt="gay"
                  className="profile-image-nav"
                />
              ) : (
                <CgProfile id="profile-img-def"></CgProfile>
              )}
              <h1 to="/profile">{profile.username}</h1>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
