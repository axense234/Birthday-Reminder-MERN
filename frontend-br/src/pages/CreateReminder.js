import React, { useEffect } from "react";
// Global Context
import { useGlobalContext } from "../context";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReminderSettings from "../components/CreateReminder/ReminderSettings";
import ReminderPreview from "../components/CreateReminder/ReminderPreview";
import Loading from "../components/Others/Loading";
import ReminderTitle from "../components/CreateReminder/ReminderTitle";

const CreateReminder = () => {
  const {
    loading,
    reminder,
    setReminder,
    addReminder,
    showModal,
    setMode,
    loadingCard,
  } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("Reminder Mode", "create");
    setMode("create");
  });

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="create-reminder-page">
        {/* Title */}
        <ReminderTitle></ReminderTitle>
        <section className="cr-content-container">
          {/* Settings */}
          <ReminderSettings
            reminder={reminder}
            setReminder={setReminder}
            addReminder={addReminder}
            showModal={showModal}
          ></ReminderSettings>
          {/* Preview */}
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

export default CreateReminder;
