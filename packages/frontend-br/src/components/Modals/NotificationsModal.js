// React
import React, { useRef } from "react";
// Context
import { useGlobalContext } from "../../context";

const NotificationsModal = () => {
  const { setShowNotificationsModal, handleNotificationsSubscription } =
    useGlobalContext();

  const NotificationsModalRef = useRef(null);

  return (
    <article
      className='notifications-modal-container'
      ref={NotificationsModalRef}
    >
      <p>
        {Notification.permission === "default"
          ? "Please allow notifications if you want to be notified about Birthday Reminders!"
          : Notification.permission === "denied" &&
            "Notifications are not allowed.Please allow them manually to be notified about Birthday Reminders!"}
      </p>
      <div className='notifications-modal-buttons-container'>
        <button
          onClick={() => {
            handleNotificationsSubscription();
          }}
        >
          ACCEPT
        </button>
        <button
          onClick={() => {
            setShowNotificationsModal(false);
          }}
        >
          IGNORE POPUP
        </button>
        <button
          onClick={() => {
            setShowNotificationsModal(false);
            localStorage.setItem("Ignore Notifications Popup", "true");
          }}
        >
          IGNORE FOREVER
        </button>
      </div>
    </article>
  );
};

export default NotificationsModal;
