// Components
import Loading from "../Others/Loading";
import ReminderCard from "./ReminderCard";
import NoRemindersFound from "./NoRemindersFound";

const RemindersContent = ({
  loadingReminders,
  reminders,
  deleteReminder,
  profile,
  getReminder,
  sortInput,
  handleNotificationsSubscription,
}) => {
  return (
    <>
      {loadingReminders ? (
        <Loading type='reminders' />
      ) : reminders.length >= 1 ? (
        <div className='reminders-page-content'>
          {reminders.map((reminder) => {
            return (
              <ReminderCard
                reminder={reminder}
                key={reminder._id}
                deleteReminder={deleteReminder}
                userId={profile.id}
                getReminder={getReminder}
                handleNotificationsSubscription={
                  handleNotificationsSubscription
                }
              />
            );
          })}
        </div>
      ) : (
        <NoRemindersFound sortInput={sortInput} />
      )}
    </>
  );
};

export default RemindersContent;
