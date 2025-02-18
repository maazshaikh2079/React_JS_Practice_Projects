import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // setCounter(counter + 1);

    // Without functional update (will cause stale state issues)
    // setCounter(counter + 1); // counter is still 0, so new state = 1
    // setCounter(counter + 1); // counter is still 0, so new state = 1
    // setCounter(counter + 1); // counter is still 0, so new state = 1

    // Using functional updates (ensures all increments work correctly)
    setCounter((prevCount) => prevCount + 1); // prevCount = 0 → 1
    setCounter((prevCount) => prevCount + 1); // prevCount = 1 → 2
    setCounter((prevCount) => prevCount + 1); // prevCount = 2 → 3
  }

  const decrement = () => {
    // setCounter(counter - 1);

    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
  }

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default App
