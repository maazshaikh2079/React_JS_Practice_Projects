import './App.css'
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import UserContextProvider from './contexts/UserContextProvider.jsx';

function App() {

  return (
    <UserContextProvider>
      <h2>React App for Context API</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
