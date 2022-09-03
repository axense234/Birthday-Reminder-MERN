import React from "react";
// Components
import ReminderCard from "../Reminders/ReminderCard";

const reminderExamples = [
  {
    id: 1,
    reminder: {
      name: "Example 1",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/53.jpg",
    },
  },
  {
    id: 2,
    reminder: {
      name: "Example 2",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 3,
    reminder: {
      name: "Example 3",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  },
];

const RemindersExample = () => {
  return (
    <main className="reminders-example-container">
      <h1>Reminder Examples</h1>
      <hr />
      <div className="reminders-examples-content">
        <img
          src="https://i.ibb.co/g9qXcYc/Calendar-Flatline.png"
          alt="gay img"
          height="300"
          width="300"
        />
        <div className="reminders-examples">
          {reminderExamples.map((example) => {
            return (
              <ReminderCard
                reminder={example.reminder}
                key={example.id}
                exampleMode={true}
              ></ReminderCard>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default RemindersExample;
