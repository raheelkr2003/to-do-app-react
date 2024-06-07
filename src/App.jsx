import { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <div className='container'>
      <div className='box'>
        <h1>To-Do List</h1>
      </div>

      <div className='inputTextDiv'>
        <input
          type="text"
          placeholder='add something to do...'
          value={newTask}
          onChange={handleInputChange}
          className='inputText'
        />
        <button className='add-button' onClick={addTask}>Add</button>
      </div>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='text'>{task}</span>
            <button
              className='delete-button'
              onClick={() => deleteTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
