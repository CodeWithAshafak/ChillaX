import React from 'react'
import "./Signup.css"


const Signup = () => {
  return (
    <>
    
    <h1>this is signup</h1>


    <div class="main">
      <h4>Registration form</h4>

      <form>
        <input type="text" id="name" placeholder="Enter Name" />
        <input type="text" id="image" placeholder="enter image url" />
        <input type="email" id="email" placeholder="enter email" />
        <input type="text" id="mob" placeholder="enter mobile number" />
        <input type="password" id="password" placeholder="enter password" />
        <input type="password" id="cpassword" placeholder="confirm password" />
        <button onclick=" return registration()">Register</button>
      </form>
    </div>
    
    </>
  )
}

export default Signup