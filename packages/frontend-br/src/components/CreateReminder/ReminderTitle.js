const ReminderTitle = ({ mode }) => {
  return (
    <>
      <div className='create-reminder-page-title'>
        <h1>{mode === "edit" ? "Edit Reminder" : "Create Reminder"}</h1>
        <hr />
      </div>
    </>
  );
};

export default ReminderTitle;
