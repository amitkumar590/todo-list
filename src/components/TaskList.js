import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";

function TaskList() {
  // Get the tasks array from the Redux store
  const tasks = useSelector((state) => state.tasks);
  // Get the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch the deleteTask action with the task ID
  };

  // Function to handle toggling the completion status of a task
  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch the toggleTask action with the task ID
  };

  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {/* Iterate over the tasks array and render each task as a list item */}
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            {/* Checkbox to toggle the completion status of the task */}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggle(task.id)} // Call handleToggle function when checkbox is toggled
            />
            {/* Display the task text with line-through style if task is done */}
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}
            >
              {task.text}
            </span>
            {/* Button to delete the task */}
            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id)} // Call handleDelete function when delete button is clicked
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
