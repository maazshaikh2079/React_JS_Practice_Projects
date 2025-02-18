import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length); // random no. from 0 to str.length
      password += str.charAt(index);
      // OR  pass += str[index];
    }

    setPassword(password);
  }, [length, numberAllowed, symbolAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolAllowed]);


  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <div
    className='w-full max-w-md mx-auto shadow-md rounded-md px-4 py-3 my-8 bg-gray-800 text-orange-500'
    style={{backgroundColor: '#141414'}}
    >
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input
        type="text"
        className='outline-none w-full py-1 px-3'
        style={{border: "3px solid #292929"}}
        value={password}
        placeholder='Password'
        readOnly
        name=''
        id='passwordInput'
        ref={passwordRef}
        />

        <button
        className='outline-none text-white px-3 py-0.5 shrink-0'
        style={{backgroundColor: '#292929'}}
        onClick={copyPasswordToClipboard}
        >
          Copy
        </button>

      </div>

      <div className='flex text-sm gap-x-2' >

        <div className='flex items-center gap-x-1'>

          <input
          type="range"
          className='cursor-pointer'
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          name=''
          id='lengthInput'
          />

        <label htmlFor="lengthInput">Length: {length}</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prevState) => !prevState)
          }}
          name=''
          id='numberInput'
          />

        <label htmlFor="numberInput">Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>

          <input
          type="checkbox"
          defaultChecked={symbolAllowed}
          onChange={() => {
            setSymbolAllowed((prevState) => !prevState)
          }}
          name=''
          id='symbolInput'
          />

          <label htmlFor="symbolInput">Symbols</label>

        </div>

      </div>

    </div>
  )
}

export default App
