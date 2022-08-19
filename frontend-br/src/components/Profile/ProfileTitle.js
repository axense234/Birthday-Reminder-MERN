import React from "react";
// Profile Map
import profileMap from "../../profileMap";
// Components
import { Link } from "react-router-dom";

const ProfileTitle = () => {
  return (
    <>
      <div className="profile-content-title">
        <h1>Profile</h1>
        <hr />
        <div className="profile-content-map">
          {profileMap.map((category) => {
            return (
              <Link to={category.link} key={category.id}>
                {category.profileName}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileTitle;
