import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Redux-Toolkit Todo Application</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
