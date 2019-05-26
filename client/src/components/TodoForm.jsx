import React, { useState } from 'react';
import axios from 'axios';
import './TodoForm.css';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onBodyChange = e => {
    setBody(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const todo = {
      title,
      body,
    };
    axios.post('http://localhost:3200/todo/newTodo', todo).then(res => {
      console.log(res);
    });
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input className="title" onChange={onTitleChange} type="text" placeholder="Naslov" />
        <input className="button" type="reset" value="Obrisi" />
         <input className="button" type="submit" value="Postavi" />
        <input className="body" onChange={onBodyChange} type="text" placeholder="Opis" />
      </form>
    </div>
  );
};

export default TodoForm;
