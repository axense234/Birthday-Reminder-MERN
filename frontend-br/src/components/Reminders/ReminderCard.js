import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReminderCard = ({ reminder, deleteReminder, userId, getReminder }) => {
  const { imageSecureUrl, name, birthday, _id: remId } = reminder;

  const birthdayDate = new Date(birthday).getTime();
  const currentDate = new Date().getTime();

  const [triggerRender, setTriggerRender] = useState(false);

  // Trigger Rerender every Second
  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerRender((t) => {
        return !t;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Date values
  let currentDays = Math.floor(
    Math.max(
      birthdayDate / 1000 / 60 / 60 / 24 -
        new Date().getTime() / 1000 / 60 / 60 / 24,
      0
    )
  );
  let currentHours = Math.floor(Math.max(24 - new Date().getHours(), 0));
  let currentMinutes = Math.floor(Math.max(60 - new Date().getMinutes()));
  let currentSeconds = 60 - new Date().getSeconds();

  return (
    <article className="reminder-card">
      {imageSecureUrl ? (
        <img src={imageSecureUrl} alt="404" />
      ) : (
        <CgProfile className="default-image-card"></CgProfile>
      )}
      <div className="reminder-card-content">
        <h1>{name}</h1>
        <hr />
        <div className="reminder-card-content-info">
          <div className="birthday-reminder">
            <p>Birthday:</p>
            <span>{new Date(birthday).toLocaleDateString()}</span>
          </div>
          <div className="birthday-reminder">
            <p>Time Remaining:</p>
            {currentDate < birthdayDate ? (
              <span>
                {currentDays} days,{currentHours - 1} hours,
                {currentMinutes} minutes,
                {currentSeconds} seconds
              </span>
            ) : (
              <span>Expired</span>
            )}
          </div>
        </div>
        <div className="reminder-card-buttons">
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
            onClick={() => deleteReminder(userId, remId, "reminders")}
          >
            <FaTrash></FaTrash>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ReminderCard;
