import React, { useState } from 'react';
import './Log.css';
import { useAuth } from '../../Components/AuthProvider/AuthProvider';

const Log = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const handleLogin = () => {
    if (userId === 'admin' && userPassword === 'admin') {
      login(userId); 
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="Log">
      <div className="logContainer">
        <div className="loginText">
          <h1>Login to Tune</h1>
        </div>
        <div className="logPuts">
          <div className="logInputs">
            <p>Username</p>
            <input
              className="UserIdInput"
              type="text"
              placeholder="username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="logInputs">
            <p>Password</p>
            <div className="passwordContainer">
              <input
                className="UserIdInput"
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <button
                type="button"
                className="togglePassword"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button className="logBtn" onClick={handleLogin}>
            Login
          </button>
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default Log;
