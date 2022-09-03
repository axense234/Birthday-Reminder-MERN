import React, { useEffect } from "react";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context";
import Loading from "../components/Others/Loading";
import NoJWT from "../components/Reminders/NoJWT";
import NoReminders from "../components/Reminders/NoReminders";
import RemindersOptions from "../components/Reminders/RemindersOptions";
import RemindersContent from "../components/Reminders/RemindersContent";
import RemindersTitle from "../components/Reminders/RemindersTitle";
import DeleteRemindersModal from "../components/Modals/DeleteRemindersModal";

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

  // Loading
  if (loading) {
    return <Loading></Loading>;
  }

  // User isn't logged in
  if (!jwtToken) {
    return <NoJWT></NoJWT>;
  }

  // User has no reminders and the sort input is false
  if (reminders.length === 0 && mode !== "sorting") {
    return <NoReminders></NoReminders>;
  }

  return (
    <>
      {overlay && <DeleteRemindersModal />}
      <Navbar></Navbar>
      <main className="reminders-page-container">
        {/* Title */}
        <RemindersTitle></RemindersTitle>
        {/* Options Bar(adding reminder,sorting) */}
        <RemindersOptions
          setShowSortingModal={setShowSortingModal}
          showSortingModal={showSortingModal}
          sortInput={sortInput}
          setSortInput={setSortInput}
          filterReminders={filterReminders}
          sortType={sortType}
        ></RemindersOptions>
        {/* Content Display(all reminder cards) */}
        <RemindersContent
          loadingReminders={loadingReminders}
          reminders={reminders}
          deleteReminder={deleteReminder}
          profile={profile}
          getReminder={getReminder}
          sortInput={sortInput}
          handleNotificationsSubscription={handleNotificationsSubscription}
        ></RemindersContent>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Reminders;
