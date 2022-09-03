import React from "react";
// Components
import Loading from "../Others/Loading";
// React Icons
import { CgProfile } from "react-icons/cg";

const ReminderPreview = ({ loadingCard, reminder }) => {
  const { reminderImageUrl, reminderName, reminderBirthday } = reminder;
  return (
    <>
      {loadingCard ? (
        <Loading type="reminder-card"></Loading>
      ) : (
        <div className="create-reminder-page-content-card">
          {reminderImageUrl ? (
            <img src={reminderImageUrl} alt="gay" id="cr-page-img" />
          ) : (
            <CgProfile id="cr-content-image-def"></CgProfile>
          )}
          <div className="cr-content-info">
            <h3>{reminderName}</h3>
            <hr />
            <p>Birthday:</p>
            <h5>{new Date(reminderBirthday).toLocaleString().split(",")[0]}</h5>
          </div>
        </div>
      )}
    </>
  );
};

export default ReminderPreview;
