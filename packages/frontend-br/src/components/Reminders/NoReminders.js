// Components
import Navbar from "../Navbar";
import Footer from "../Footer";

const NoReminders = () => {
  return (
    <>
      <Navbar />
      <div className='no-reminders'>
        <p>No Reminders,but you can Create one here!</p>
        <a
          className='options-btn'
          href='/create-reminder'
          onClick={() => {
            localStorage.setItem("Reminder Mode", "edit");
          }}
        >
          Create Reminder
        </a>
      </div>
      <Footer />
    </>
  );
};

export default NoReminders;
