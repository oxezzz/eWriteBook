import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="app">
      <TodoForm />
      <TodoItem title={'Naslov'} body={'Opis'} />
      <TodoList />
    </div>
  );
}

export default App;
