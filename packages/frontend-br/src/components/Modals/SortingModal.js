// React Icons
import { VscTriangleDown } from "react-icons/vsc";
import { useGlobalContext } from "../../context";
// Data
import { sortingOptions } from "../../data";

const SortingModal = () => {
  const { filterReminders, sortingModal, sortInput } = useGlobalContext();

  return (
    <article className='sorting-modal-container' ref={sortingModal}>
      <article className='sorting-modal-options'>
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
      <VscTriangleDown className='triangle-down' />
    </article>
  );
};

export default SortingModal;
