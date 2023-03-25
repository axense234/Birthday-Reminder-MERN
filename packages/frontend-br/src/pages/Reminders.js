// React
import React, { useEffect } from "react";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Others/Loading";
import NoJWT from "../components/Reminders/NoJWT";
import NoReminders from "../components/Reminders/NoReminders";
import RemindersOptions from "../components/Reminders/RemindersOptions";
import RemindersContent from "../components/Reminders/RemindersContent";
import RemindersTitle from "../components/Reminders/RemindersTitle";
import DeleteRemindersModal from "../components/Modals/DeleteRemindersModal";
// Global Context
import { useGlobalContext } from "../context";

const Reminders = () => {
  const {
    reminders,
    loadingReminders,
    loading,
    jwtToken,
    showSortingModal,
    setShowSortingModal,
    sortingModal,
    profile,
    deleteReminder,
    getReminder,
    sortInput,
    setSortInput,
    filterReminders,
    sortType,
    mode,
    handleNotificationsSubscription,
    overlay,
  } = useGlobalContext();

  useEffect(() => {
    const sortingModalComponent = sortingModal.current;
    if (sortingModalComponent) {
      sortingModalComponent.style.opacity = showSortingModal ? "1" : "0";
    }
  }, [showSortingModal, sortingModal]);

  if (loading) {
    return <Loading />;
  }

  if (!jwtToken) {
    return <NoJWT />;
  }

  if (reminders.length === 0 && mode !== "sorting") {
    return <NoReminders />;
  }

  return (
    <>
      {overlay && <DeleteRemindersModal />}
      <Navbar />
      <main className='reminders-page-container'>
        <RemindersTitle />
        <RemindersOptions
          setShowSortingModal={setShowSortingModal}
          showSortingModal={showSortingModal}
          sortInput={sortInput}
          setSortInput={setSortInput}
          filterReminders={filterReminders}
          sortType={sortType}
        />
        <RemindersContent
          loadingReminders={loadingReminders}
          reminders={reminders}
          deleteReminder={deleteReminder}
          profile={profile}
          getReminder={getReminder}
          sortInput={sortInput}
          handleNotificationsSubscription={handleNotificationsSubscription}
        />
      </main>
      <Footer />
    </>
  );
};

export default Reminders;
