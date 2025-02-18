import './App.css'
import { useState, useEffect } from 'react';
import Card from './components/Card.jsx';
import ThemeBtn from './components/ThemeBtn.jsx';
import { ThemeContextProvider } from './contexts/theme.js';

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const changeToDarkMode = () => {
    setThemeMode('dark');
  }

  const changeToLightMode = () => {
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (

    <ThemeContextProvider value={{themeMode, changeToDarkMode, changeToLightMode}}>
    <div className='flex flex-wrap min-h-screen items-center'>

      <div className='w-full'>

        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <ThemeBtn />
        </div>

        <div className='w-full max-w-sm mx-auto'>
          <Card />
        </div>

      </div>

    </div>
    </ThemeContextProvider>

  )
}

export default App
