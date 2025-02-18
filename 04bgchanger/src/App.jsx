import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("#282828");

  console.log(color);
  // It will double print; <React.StrictMode> in development mode intentionally double-renders components to detect side effects and potential issues.

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor: 'red'}}
          onClick={() => setColor('red')}>
            Red
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor: 'green'}}
          onClick={() => setColor('green')}>
            Green
          </button>
          <button
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
          style={{backgroundColor: 'blue'}}
          onClick={() => setColor('blue')}>
            Blue
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

/*
Console:
App.jsx:8 blue
App.jsx:8 blue
App.jsx:8 green
App.jsx:8 green
App.jsx:8 red
App.jsx:8 red
App.jsx:8 green
App.jsx:8 green
*/
// <React.StrictMode> in development mode intentionally double-renders components to detect side effects and potential issues.
