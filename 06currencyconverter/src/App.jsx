import { useState } from 'react';
import './App.css';
import useCurrencyInfo from '../hooks/useCurrencyInfo.js';
import { InputBox } from '../components/index.js'

function App() {

  const [amount, setAmount] = useState(0);  // "From" input field display number
  const [from, setFrom] = useState('usd');  // "From" currency
  const [to, setTo] = useState('inr');      // "To" currency
  const [convertedAmount, setConvertedAmount] = useState(0);  // "To" input field display number

  const currencyInfo = useCurrencyInfo(from);  // stores API data (usd) in object from
  const options = Object.keys(currencyInfo);   // stores all key from API data (usd)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // const swap = () => {
  //   setFrom(to)
  //   setTo(from)
  //   const tempAmount = amount;
  //   const tempConvertedAmount = convertedAmount;
  //   setConvertedAmount(tempAmount)
  //   setAmount(tempConvertedAmount)
  //   setConvertedAmount((prevConverted) => amount * currencyInfo[from]);
  // }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>

            <div className='w-full mb-1'>
              <InputBox
              label='From'
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              />
            </div>

            <div className='relative w-full h-0.5'>
            <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>
                Swap
              </button>
            </div>

            <div className='w-full mb-1'>

              <InputBox
              label="To"
              amount={convertedAmount}
              amountDisabled  // sets read only input field
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              // amountDisabled
              />
            </div>

            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App
