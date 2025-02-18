import './App.css'
import Card from './components/Card'
import "tailwindcss";

function App() {

  let myObj = {
    name: 'Maaz',
    age: 25,
    address: {
      city: 'Mumbai',
      state: 'Mahashtra',
      country: 'India'
    }
  };

  let array = [2, 0, 7, 9];

  return (
    <>
    <p className="text-3xl font-bold bg-blue-400 p-3 rounded-md">
      Vite + React JS w/ Tailwind CSS
    </p>
    <Card username='Maaz' myAry={array} />
    <Card post='System Engineer' />
    <Card />
    </>
  )
}

export default App;
