import React from "react";
// Components
import Loading from "../Others/Loading";
import ReminderCard from "./ReminderCard";

const RemindersContent = ({
  loadingReminders,
  reminders,
  deleteReminder,
  profile,
  getReminder,
}) => {
  return (
    <>
      {loadingReminders ? (
        <Loading type="reminders"></Loading>
      ) : (
        <div className="reminders-page-content">
          {reminders.map((reminder) => {
            return (
              <ReminderCard
                reminder={reminder}
                key={reminder._id}
                deleteReminder={deleteReminder}
                userId={profile.id}
                getReminder={getReminder}
              ></ReminderCard>
            );
          })}
        </div>
      )}
    </>
  );
};

export default RemindersContent;
