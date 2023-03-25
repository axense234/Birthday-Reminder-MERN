// Components
import ReminderCard from "../Reminders/ReminderCard";
// Data
import { reminderExamples } from "../../data";

const RemindersExample = () => {
  return (
    <main className='reminders-example-container'>
      <h1>Reminder Examples</h1>
      <hr />
      <div className='reminders-examples-content'>
        <div className='reminders-examples'>
          {reminderExamples.map((example) => {
            return (
              <ReminderCard
                reminder={example.reminder}
                key={example.id}
                exampleMode={true}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default RemindersExample;
