import React from "react";

// Components
import Navbar from "../Navbar";
import Footer from "../Footer";

const NoReminders = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="no-reminders">
        <p>No Reminders,but you can Create one here!</p>
        <a
          className="options-btn"
          href="/create-reminder"
          target="_blank"
          onClick={() => {
            localStorage.setItem("Reminder Mode", "edit");
          }}
        >
          Create Reminder
        </a>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NoReminders;
