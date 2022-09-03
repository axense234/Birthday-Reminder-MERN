import React from "react";

const OfflineModal = () => {
  return (
    <article className="offline-modal-container">
      <p>
        WARNING: No internet connection found.While you can still explore the
        website freely,please do remember that you won't be able to:
        create/edit/delete any reminder you have,also won't be able to sign up
        or login,won't be able to set the settings of the profile,you also won't
        be able to sort/filter any reminder.Thanks for reading.
      </p>
    </article>
  );
};

export default OfflineModal;
