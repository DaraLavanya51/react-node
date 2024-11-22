import React, { useState } from 'react';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowForm(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
  };

  return (
    <div>
      <style>
        {`
          .login-container {
            max-width: 400px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
            text-align: center;
          }
          .login-container h2 {
            margin-bottom: 20px;
          }
          .login-container button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }
          .login-container button:hover {
            background-color: #0056b3;
          }
          .login-container form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .login-container label {
            margin-bottom: 10px;
            font-weight: bold;
          }
          .login-container input {
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
          }
        `}
      </style>
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <h2>Hi, {name}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            {showForm ? (
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div>
                <h2>Please Log In</h2>
                <button onClick={handleLogin}>Login</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;