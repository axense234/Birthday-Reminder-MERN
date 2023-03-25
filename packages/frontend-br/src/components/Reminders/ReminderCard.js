// React
import React, { useEffect, useState } from "react";
// React Icons
import { AiFillEdit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaTrash, FaBell, FaBellSlash } from "react-icons/fa";
// React Router
import { Link } from "react-router-dom";
// Global Context
import { useGlobalContext } from "../../context";

const ReminderCard = ({ reminder, getReminder, exampleMode = false }) => {
  const { imageSecureUrl, name, birthday, _id: remId } = reminder;

  const {
    handleNotificationsSending,
    isMutedGlobal,
    setOverlay,
    setOverlayFunctionType,
    setReminderId,
  } = useGlobalContext();

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
    <article
      className={
        !reminderBirthday ? "reminder-card" : "reminder-card activeBirthday"
      }
    >
      {imageSecureUrl ? (
        <img src={imageSecureUrl} alt='404' width='700' height='700' />
      ) : (
        <CgProfile className='default-image-card' />
      )}
      <div className='reminder-card-content'>
        <h1>{name}</h1>
        <hr />
        <div className='reminder-card-content-info'>
          <div className='birthday-reminder'>
            <p>Birthday:</p>
            <span>
              {new Date(birthday).toLocaleDateString() || triggerRender}
            </span>
          </div>
          <div className='birthday-reminder'>
            <p>Time Remaining:</p>
            {currentDate < birthdayDate ? (
              <span>
                {currentDays} days,{currentHours - 1} hours,
                {currentMinutes} minutes,
                {currentSeconds} seconds
              </span>
            ) : reminderBirthday ? (
              <span className='birthdayTime'>Birthday Time</span>
            ) : (
              <span>Expired</span>
            )}
          </div>
        </div>
        {exampleMode || (
          <div className='reminder-card-buttons'>
            <button
              className='notify-reminder'
              onClick={() => {
                setIsMuted(!isMuted);
                localStorage.setItem(`${name} isMuted`, `${!isMuted}`);
              }}
              aria-label='Bell Button'
            >
              {!isMuted ? <FaBell /> : <FaBellSlash />}
            </button>
            <Link
              className='edit-reminder'
              to='/edit-reminder'
              onClick={() => {
                getReminder(remId);
              }}
              aria-label='Edit Button'
            >
              <AiFillEdit />
            </Link>
            <button
              className='delete-reminder'
              onClick={() => {
                setReminderId(remId);
                setOverlayFunctionType("deleteSingleReminder");
                setOverlay(true);
              }}
              aria-label='Delete Button'
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default ReminderCard;
