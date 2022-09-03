import React from "react";
// React icons
import { GrSearch } from "react-icons/gr";
// Global Context
import { useGlobalContext } from "../../context";
// Components
import SortingModal from "../Modals/SortingModal";

const RemindersOptions = ({
  setShowSortingModal,
  showSortingModal,
  sortInput,
  setSortInput,
  filterReminders,
  sortType,
}) => {
  const { isMutedGlobal, setIsMutedGlobal, reminders, setOverlay } =
    useGlobalContext();
  return (
    <div className="reminders-page-options">
      <button
        className="options-btn"
        onClick={() => {
          setOverlay(true);
        }}
      >
        Delete All Reminders
      </button>
      <a
        className="options-btn"
        href="/create-reminder"
        onClick={() => localStorage.setItem("Reminder Mode", "edit")}
      >
        Create Reminder
      </a>
      <button
        className="options-btn"
        onClick={() => {
          localStorage.setItem(
            "isMuted Global",
            `${isMutedGlobal === "true" ? "false" : "true"}`
          );
          setIsMutedGlobal(isMutedGlobal === "true" ? "false" : "true");
          reminders.forEach((reminder) => {
            localStorage.setItem(
              `${reminder.name} isMuted`,
              isMutedGlobal === "true" ? "false" : "true"
            );
          });
        }}
      >
        Mute/Unmute Reminders
      </button>
      <form className="options-form">
        <div className="sorting-input-container">
          <GrSearch></GrSearch>
          <input
            type="text"
            id="sort"
            value={sortInput}
            onChange={(e) => {
              setSortInput(e.target.value);
              localStorage.setItem("sortInput", e.target.value);
              filterReminders(sortType, e.target.value);
            }}
          />
        </div>
        <div className="sorting-label-container">
          <SortingModal id="sortingModal"></SortingModal>
          <label
            htmlFor="sort"
            className="options-btn"
            onClick={() => setShowSortingModal(!showSortingModal)}
          >
            Sort By
          </label>
        </div>
      </form>
    </div>
  );
};

export default RemindersOptions;
