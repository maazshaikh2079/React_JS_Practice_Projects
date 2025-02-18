import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext.js';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  }

  return (
    <div>
      <h2>Login</h2>

      <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder='username'
      name="username"
      id="username"
      style={{fontSize: "1.2rem", padding: ".6rem", border: "none", borderRadius: "7px"}}
      />
      <br />
      <br />
      {" "}

      <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password'
      name="password"
      id="password"
      style={{fontSize: "1.2rem", padding: ".6rem", border: "none", borderRadius: "7px"}}
      />
      <br />
      <br />

      <button
      onClick={handleSubmit}
      >
        Submit
      </button>
      <br />
      <br />

    </div>
  )
}

export default Login;
