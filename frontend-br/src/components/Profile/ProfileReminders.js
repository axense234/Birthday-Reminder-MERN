import React from "react";
// React Icons
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
// Components
import { Link } from "react-router-dom";

const ProfileReminders = ({
  showReminders,
  setShowReminders,
  reminders,
  deleteReminder,
  getReminder,
}) => {
  return (
    <>
      <div className="profile-content-reminders" id="reminders">
        <h1 className="profile-h1">3.Profile Reminders</h1>
        <button type="button" onClick={() => setShowReminders(!showReminders)}>
          {showReminders ? "Hide" : "Show"}
        </button>
        {showReminders && (
          <ul className="profile-content-reminders-list">
            {reminders.map((reminder) => {
              console.log(reminder);
              return (
                <ProfileReminder
                  {...reminder}
                  key={reminder._id}
                  deleteReminder={deleteReminder}
                  getReminder={getReminder}
                ></ProfileReminder>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

const ProfileReminder = ({
  birthday,
  name,
  imageSecureUrl,
  _id: remId,
  createdBy: userId,
  deleteReminder,
  getReminder,
}) => {
  return (
    <>
      <li className="profile-reminder-li">
        <img src={imageSecureUrl} alt="Lmao idk" />
        <h3>{name}</h3>
        <article className="profile-reminder-li-content">
          <div className="profile-birtday-reminders">
            <div className="birthday-reminder">
              <p>Birthday:</p>
              <span>{birthday}</span>
            </div>
            <div className="birthday-reminder">
              <p>Time Remaining:</p>
              <span>{new Date().toISOString().split("T")[0]}</span>
            </div>
          </div>
          <div className="profile-reminder-li-buttons">
            <Link
              className="edit-reminder"
              to="/edit-reminder"
              onClick={() => {
                getReminder(remId);
              }}
            >
              <AiFillEdit></AiFillEdit>
            </Link>
            <button
              className="delete-reminder"
              onClick={() => deleteReminder(userId, remId, "profile")}
            >
              <FaTrash></FaTrash>
            </button>
          </div>
        </article>
      </li>
    </>
  );
};

export default ProfileReminders;
