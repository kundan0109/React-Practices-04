import { useState } from "react";
import "./Todo02.css";

const Task02 = () => {
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input !== "") {
      setTask([...task, { task: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...task];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTask(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...task];
    updatedTasks.splice(index, 1);
    setTask(updatedTasks);
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your todo here..."
      />
      <button onClick={addTask}>Add task</button>

      <ul>
        {task.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.task}
            <button onClick={() => toggleTaskCompletion(index)}>
              {" "}
              {task.completed ? "Uncomplete" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Task02;
