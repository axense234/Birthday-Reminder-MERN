import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="main-content">
      <div className="main-content-info">
        <h1 id="main-content-title">Welcome to Birthday Reminder!</h1>
        <hr id="main-content-title-hr" />
        <p id="main-content-desc">
          Birthday Reminder is an app used by all people over the globe to be
          notified of their friends,loved ones,colleagues birthday dates!
          <a href="/signup">Sign Up</a>
          now for free to receive/manage your birthday notifications!
        </p>
        <Link to="/signup" id="signup-btn">
          Sign Up Now For Free!
        </Link>
      </div>
      <img src="https://i.ibb.co/02y2Mym/testingimage.png" alt="fa" />
    </main>
  );
};
export default Content;
