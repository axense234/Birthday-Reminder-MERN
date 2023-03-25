// React
import React, { useEffect } from "react";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReminderPreview from "../components/CreateReminder/ReminderPreview";
import ReminderSettings from "../components/CreateReminder/ReminderSettings";
import Loading from "../components/Others/Loading";
import ReminderTitle from "../components/CreateReminder/ReminderTitle";
// Global Context
import { useGlobalContext } from "../context";

const EditReminder = () => {
  const {
    loading,
    reminder,
    setReminder,
    addReminder,
    showModal,
    loadingCard,
    mode,
    setMode,
    editReminder,
  } = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("Reminder Mode", "edit");
    setMode("edit");
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className='create-reminder-page'>
        <ReminderTitle mode={mode} />
        <section className='cr-content-container'>
          <ReminderSettings
            reminder={reminder}
            setReminder={setReminder}
            addReminder={addReminder}
            editReminder={editReminder}
            showModal={showModal}
            mode={mode}
          />
          <ReminderPreview loadingCard={loadingCard} reminder={reminder} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EditReminder;
