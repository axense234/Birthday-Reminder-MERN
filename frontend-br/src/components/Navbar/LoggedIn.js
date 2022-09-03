import React from "react";
// Components
import { Link } from "react-router-dom";
// Global Context
import { useGlobalContext } from "../../context";
// React Icons
import { CgProfile } from "react-icons/cg";

const LoggedIn = () => {
  const { profile, handleLogout, handleGetProfile } = useGlobalContext();
  return (
    <>
      {/* Reminders Link */}
      <Link to="/reminders">Reminders</Link>
      {/* Sign up Link */}
      <Link to="/signup">Sign Up</Link>
      {/* Logout link */}
      <Link to="/" id="logout-btn" onClick={() => handleLogout()}>
        Logout
      </Link>
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
  );
};

export default LoggedIn;
