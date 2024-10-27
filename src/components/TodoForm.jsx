import React, { useState } from 'react';
import { Todo } from './Todo';

export const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [update, setUpdate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if(text) {
    setTasks([...tasks, {text}]);
    setText('');
    setUpdate(false);
    }
  }

  const handleChange = (e) => {
    setText(e.target.value);
}
  return (
    <div className="container" onSubmit={handleClick}>
      <p className="goalText">Add your Tasks!!!</p>
      <form className="form">
        <input placeholder="Add your todo tasks" className="input" onChange={handleChange} value={text}/>
        <button type="submit" className="btn">{update ? 'Update' : 'Add Task'}</button>
      </form>
      <Todo tasks={tasks} setTasks={setTasks} setText={setText} setUpdate={setUpdate}/>
    </div>
  )
}
