import React from 'react';
import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext.js';

function TodoForm() {

  const [todoTask, setTodoTask] = useState('');
  const {addTodo} = useTodo();

  // const addTodo = (todo) => {
  //   setTodos((prevTodos) => [{...todo}, ...prevTodos]);
  //   // OR  setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos]);   // Do changes in TodoForm.jsx
  // }

  const addTaskTodo = (e) => {
    e.preventDefault();
    if (!todoTask) return;
    addTodo({id: Date.now(), task: todoTask, completed: false});
    setTodoTask('');
  }

  return (
    <form onSubmit={addTaskTodo} className='flex'>
      <input
      type='text'
      placeholder='Write a task to do....'
      className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
      value={todoTask}   // value attribute is used to wire input field w/ state
      onChange={(e) => setTodoTask(e.target.value)}
      />
      <button
      type='submit'
      className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
      >Add Task To-do</button>
    </form>
  )
}

export default TodoForm;
