import React, { useState, useEffect } from "react";
// React Icons
import { AiFillEdit } from "react-icons/ai";
import { FaTrash, FaBell, FaBellSlash } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
// Components
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

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
        {showReminders &&
          (reminders.length !== 0 ? (
            <ul className="profile-content-reminders-list">
              {reminders.map((reminder) => {
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
          ) : (
            <div className="profile-no-reminders">
              <h1>
                No Reminders,but you can Create one by clicking on this button!
              </h1>
              <a
                className="options-btn"
                href="/create-reminder"
                onClick={() => localStorage.setItem("Reminder Mode", "edit")}
              >
                Create Reminder
              </a>
            </div>
          ))}
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
  exampleMode = false,
}) => {
  const { handleNotificationsSending, isMutedGlobal } = useGlobalContext();

  // Dates
  const birthdayDate = new Date(birthday).getTime();
  const currentDate = new Date().getTime();
  let currentDays = Math.floor(
    Math.max(
      birthdayDate / 1000 / 60 / 60 / 24 -
        new Date().getTime() / 1000 / 60 / 60 / 24,
      0
    )
  );

  const [triggerRender, setTriggerRender] = useState(false);
  const [reminderBirthday, setReminderBirthday] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Handle isMuted based on global/local isMuted
    const isMutedLocal = localStorage.getItem(`${name} isMuted`);
    setIsMuted(isMutedGlobal === "true" ? true : false);
    setIsMuted(isMutedLocal === "true" ? true : false);
  }, [name, isMutedGlobal]);

  // Trigger Rerender every Second
  useEffect(() => {
    // Interval
    const interval = setInterval(() => {
      if (
        Math.floor(currentDate / 1000 / 60 / 60 / 24) ===
        Math.floor(birthdayDate / 1000 / 60 / 60 / 24)
      ) {
        if (
          reminderBirthday === false &&
          !exampleMode &&
          Notification.permission === "granted" &&
          !isMuted
        ) {
          handleNotificationsSending(remId);
        }
        setReminderBirthday(true);
      }
      setTriggerRender((t) => {
        return !t;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [
    birthdayDate,
    currentDate,
    handleNotificationsSending,
    remId,
    reminderBirthday,
    exampleMode,
    isMuted,
  ]);

  // Date values
  let currentHours = Math.floor(Math.max(24 - new Date().getHours(), 0));
  let currentMinutes = Math.floor(Math.max(60 - new Date().getMinutes()));
  let currentSeconds = 60 - new Date().getSeconds();
  return (
    <>
      <li
        className={
          !reminderBirthday
            ? "profile-reminder-li"
            : "profile-reminder-li activeBirthday"
        }
      >
        {imageSecureUrl !== "" ? (
          <img src={imageSecureUrl} alt="Invalid" />
        ) : (
          <CgProfile style={{ fontSize: "7rem" }}></CgProfile>
        )}
        <h3>{name}</h3>
        <article className="profile-reminder-li-content">
          <div className="profile-birtday-reminders">
            <div className="birthday-reminder">
              <p>Birthday:</p>
              <span>
                {new Date(birthday).toLocaleDateString() || triggerRender}
              </span>
            </div>
            <div className="birthday-reminder">
              <p>Time Remaining:</p>
              {currentDate < birthdayDate ? (
                <span>
                  {currentDays} days,{currentHours - 1} hours,
                  {currentMinutes} minutes,
                  {currentSeconds} seconds
                </span>
              ) : reminderBirthday ? (
                <span className="birthdayTime">Birthday Time</span>
              ) : (
                <span>Expired</span>
              )}
            </div>
          </div>
          <div className="profile-reminder-li-buttons">
            <button
              className="notify-reminder"
              onClick={() => {
                setIsMuted(!isMuted);
                localStorage.setItem(`${name} isMuted`, `${!isMuted}`);
              }}
              aria-label="Bell Button"
            >
              {!isMuted ? <FaBell /> : <FaBellSlash />}
            </button>
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
              aria-label="Delete Button"
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
