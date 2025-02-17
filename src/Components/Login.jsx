import React, { useState } from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target; // Get name and value from input field
    setInput((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const order = (e) => {
    e.preventDefault(); // Prevent form submission reload
    if (input.email === "ashafak04@gmail.com" && input.password === "1234") {
      navigate("/order");
    } else {
      alert("Provide correct credentials");
    }
  };

  return (
    <div className="main">
      <form>
        <input
          type="email"
          id="email"
          placeholder="Enter your email Id"
          name="email"
          value={input.email}
          onChange={inputHandler}
        />

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={input.password}
          onChange={inputHandler}
        />

        <button onClick={order}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
