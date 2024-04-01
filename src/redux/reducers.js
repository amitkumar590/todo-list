const initialState = {
    tasks: [], // Initial state with an empty array of tasks
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        // Case for adding a new task
        return {
          ...state, // Copy the current state
          tasks: [...state.tasks, action.payload], // Add the new task to the tasks array
        };
      case "DELETE_TASK":
        // Case for deleting a task
        return {
          ...state, // Copy the current state
          tasks: state.tasks.filter((task) => task.id !== action.payload), // Remove the task with the given ID
        };
      case "TOGGLE_TASK":
        // Case for toggling the completion status of a task
        return {
          ...state, // Copy the current state
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, done: !task.done } : task // Toggle the done status of the task with the given ID
          ),
        };
      default:
        // Default case, return the current state
        return state;
    }
  };
  
  export default taskReducer;
  