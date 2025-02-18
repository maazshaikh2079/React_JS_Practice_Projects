import './App.css';
import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  // addTodo: (todo) => {},
  const addTodo = (todo) => {
    // We use a functional update (prevTodos) => ... to ensure we always work with the latest state.
    // prevTodos is the current state (an array of todos).
    setTodos((prevTodos) => [{...todo}, ...prevTodos]);
    // OR  setTodos((prevTodos) => [{id: Date.now(), ...todo}, ...prevTodos]);   // Do changes in TodoForm.jsx
  }

  // updateTodo: (todo) => {},
  const updateTodo = (todo) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))
  }

  // deleteTodo: (id) => {},
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    // We use a functional update (prevTodos) => ... to ensure we always work with the latest state.
    // prevTodos is the current state (an array of todos).
    // .filter() creates a new array by keeping only the items that do not match the given id.
    // todo.id !== id → Returns true for todos that should stay in the list.
    // The result is a new array without the deleted todo.
  }

  // toggleComplete: (id) => {}
  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    )))
  }

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */}
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map((todo) => (
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
