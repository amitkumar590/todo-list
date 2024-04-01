import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

function TaskInput() {
  // State to manage the text input value
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setTaskText(e.target.value); // Update the taskText state with the input value
  };

  // Function to handle form submission (adding a new task)
  const handleSubmit = () => {
    dispatch(addTask(taskText)); // Dispatch the addTask action with the taskText value
    setTaskText(''); // Clear the input field after submitting the task
  };

  return (
    <div className='input'>
      {/* Input field for entering task text */}
      <input type="text" value={taskText} onChange={handleChange} placeholder='Write your next task here...' />
      {/* Button to submit the task */}
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskInput;
