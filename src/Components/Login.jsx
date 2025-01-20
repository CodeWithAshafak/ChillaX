import React from 'react'

import "./Login.css"

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
const Login = () => {

  let navigate = useNavigate()

  let handler = ()=>{
    
      navigate("/signup")
    
  }
  return (
    <>
    
   


    <div className="main">
      <form >
        <input type="email" id="email" placeholder="Enter your email Id" />

        <input type="password" id="password" placeholder="enter your password" />


        <button onClick={Home}>Log in</button>
      </form>

      <h5>don't have account? <button onClick={handler}  >Register</button> </h5>
    </div>
    </>
  )
}

export default Login