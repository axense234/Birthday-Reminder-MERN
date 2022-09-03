import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";

const DeleteRemindersModal = () => {
  const [confirmationTimeout, setConfirmationTimeout] = useState(true);
  const [timeTilAccess, setTimeTilAccess] = useState(10);

  const {
    handleDeleteAllReminders,
    handleDeleteAllRemindersModalClosing,
    deleteRemindersModalRef,
  } = useGlobalContext();

  useEffect(() => {
    if (timeTilAccess <= 0) {
      return;
    }
    const interval = setInterval(() => {
      setTimeTilAccess((t) => t - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeTilAccess]);

  useEffect(() => {
    if (timeTilAccess === 0) {
      setConfirmationTimeout(false);
    }
  }, [confirmationTimeout, timeTilAccess]);

  return (
    <article className="delete-reminders-modal-container">
      <div className="delete-reminders-content" ref={deleteRemindersModalRef}>
        <h3>Are you sure?</h3>
        <p>
          Are you really sure you want to delete all reminders?WARNING:This
          action is irreversible!
        </p>
        <div className="delete-reminders-buttons-container">
          {confirmationTimeout ? (
            <button style={{ textAlign: "center" }}>{timeTilAccess}</button>
          ) : (
            <button
              onClick={() => {
                handleDeleteAllRemindersModalClosing();
                setTimeout(() => {
                  handleDeleteAllReminders();
                }, 300);
              }}
            >
              Delete
            </button>
          )}
          <button
            onClick={() => {
              handleDeleteAllRemindersModalClosing();
            }}
          >
            No
          </button>
        </div>
      </div>
    </article>
  );
};

export default DeleteRemindersModal;
