const NoRemindersFound = ({ sortInput }) => {
  return (
    <section className='no-reminders-found-container'>
      <h1>404</h1>
      <p>
        No Reminders found with <span>"{sortInput}"</span> .Please check your
        sorting type and/or if you have misspelled something.
      </p>
    </section>
  );
};

export default NoRemindersFound;
