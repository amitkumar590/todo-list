import { v4 as uuidv4 } from 'uuid';

// Action creator to add a new task
export const addTask = (text) => ({
  type: 'ADD_TASK', // Action type indicating adding a task
  payload: {
    id: uuidv4(), // Generate a unique ID for the task using uuidv4()
    text // The text of the task
  }
});

// Action creator to delete a task
export const deleteTask = (id) => ({
  type: 'DELETE_TASK', // Action type indicating deleting a task
  payload: id // The ID of the task to be deleted
});

// Action creator to toggle the completion status of a task
export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK', // Action type indicating toggling the completion status of a task
  payload: id // The ID of the task to be toggled
});
