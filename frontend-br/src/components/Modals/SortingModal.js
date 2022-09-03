import React from "react";
// React Icons
import { VscTriangleDown } from "react-icons/vsc";
import { useGlobalContext } from "../../context";

const sortingOptions = [
  {
    id: 1,
    optionName: "Name",
    filter: "name",
  },
  {
    id: 2,
    optionName: "Birthday Date",
    filter: "birthdayDate",
  },
  {
    id: 3,
    optionName: "Time Remaining",
    filter: "timeRemaining",
  },
  {
    id: 4,
    optionName: "Newest",
    filter: "newest",
  },
];

const SortingModal = () => {
  const { filterReminders, sortingModal, sortInput } = useGlobalContext();
  return (
    <article className="sorting-modal-container" ref={sortingModal}>
      <article className="sorting-modal-options">
        {sortingOptions.map((option) => {
          return (
            <button
              key={option.id}
              onClick={() => {
                filterReminders(option.filter, sortInput);
              }}
            >
              {option.optionName}
            </button>
          );
        })}
      </article>
      <VscTriangleDown className="triangle-down"></VscTriangleDown>
    </article>
  );
};

export default SortingModal;
