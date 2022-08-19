import React from "react";
// React icons
import { GrSearch } from "react-icons/gr";
// Components
import SortingModal from "../Modals/SortingModal";

const RemindersOptions = ({ setShowSortingModal, showSortingModal }) => {
  return (
    <div className="reminders-page-options">
      <a
        className="options-btn"
        href="/create-reminder"
        target="_blank"
        onClick={() => localStorage.setItem("Reminder Mode", "edit")}
      >
        Create Reminder
      </a>
      <form className="options-form">
        <div className="sorting-input-container">
          <GrSearch></GrSearch>
          <input type="text" id="sort" />
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
