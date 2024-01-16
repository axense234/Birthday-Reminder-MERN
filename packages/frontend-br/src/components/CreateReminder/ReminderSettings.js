// Components
import Modal from "../Modals/Modal";
// Context
import { useGlobalContext } from "../../context";

const ReminderSettings = ({
  reminder,
  setReminder,
  addReminder,
  editReminder,
  showModal,
  mode,
}) => {
  const { loadingCloudinaryImage } = useGlobalContext();

  return (
    <>
      <div className="create-reminder-page-content-settings">
        {showModal.active && <Modal msg={showModal.msg} />}
        <div className="cr-settings-title">
          <h1>Settings</h1>
          <hr />
        </div>
        <form
          className="cr-settings-form"
          onSubmit={(e) => {
            mode === "edit" ? editReminder(e, reminder.id) : addReminder(e);
          }}
        >
          <label htmlFor="image-cr">Change Image: </label>
          <input
            type="file"
            name="image-cr"
            id="image-cr"
            onChange={(e) => {
              setReminder({
                ...reminder,
                reminderImageFile: e.target.files[0],
              });
            }}
          />
          <label htmlFor="name-cr">Change Name: </label>
          <input
            type="text"
            name="name-cr"
            id="name-cr"
            value={reminder.reminderName}
            onChange={(e) => {
              setReminder({
                ...reminder,
                reminderName: e.target.value,
              });
            }}
          />
          <label htmlFor="birthday-cr">Change Birthday: </label>
          <input
            type="date"
            name="birthday-cr"
            id="birthday-cr"
            onChange={(e) => {
              setReminder({
                ...reminder,
                reminderBirthday: e.target.value,
              });
            }}
          />
          <button
            type="submit"
            disabled={loadingCloudinaryImage}
            style={{
              filter: loadingCloudinaryImage
                ? "brightness(0.7)"
                : "brightness(1)",
            }}
          >
            {mode === "edit" ? "Edit Reminder" : "Create Reminder"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ReminderSettings;
