import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({tasks, setTasks, setText, setUpdate}) => {

  const handleEdit = (text, index) => {
    setUpdate(true);
    handleDelete(index);
    setText(text);
  }

   const handleDelete = (index) => {
    let updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
   };
  return (
    <>
     {tasks.map((task, index) => (
    <div className="todos" key={index} >
     <span className="text">{task.text}</span>
     <span className="icons">
     <FontAwesomeIcon  icon={faPenToSquare} className="icon" onClick={() => handleEdit(task.text, index) }></FontAwesomeIcon>
     <FontAwesomeIcon  icon={faTrash} className="icon" onClick={() => handleDelete(index) }></FontAwesomeIcon>
     </span>
    </div>
    ))}
    </>
  )
}
