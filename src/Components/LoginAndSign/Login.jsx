import React from 'react'
import './LoginAndSign.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const ToLoginPage =() =>{
    navigate("./log");
  }
  return (
    <div onClick={ToLoginPage} >
      <button className='LogInBtn'>Log in</button>
    </div>
  )
}

export default Login
