import React, { useEffect } from "react";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReminderPreview from "../components/CreateReminder/ReminderPreview";
import ReminderSettings from "../components/CreateReminder/ReminderSettings";
import Loading from "../components/Others/Loading";
// Global Context
import { useGlobalContext } from "../context";
import ReminderTitle from "../components/CreateReminder/ReminderTitle";

const EditReminder = () => {
  const {
    loading,
    reminder,
    setReminder,
    addReminder,
    showModal,
    loadingCard,
    mode,
    editReminder,
  } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("Reminder Mode", "edit");
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="create-reminder-page">
        <ReminderTitle mode={mode}></ReminderTitle>
        <section className="cr-content-container">
          <ReminderSettings
            reminder={reminder}
            setReminder={setReminder}
            addReminder={addReminder}
            editReminder={editReminder}
            showModal={showModal}
            mode={mode}
          ></ReminderSettings>
          <ReminderPreview
            loadingCard={loadingCard}
            reminder={reminder}
          ></ReminderPreview>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EditReminder;
