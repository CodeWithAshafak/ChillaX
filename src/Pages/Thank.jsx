import React from "react";
import t1 from "../images/Thank.gif";
import "../CSS/Thank.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Thank = () => {
  const navigate = useNavigate()
  return (

    <div className="thank-container">
      <img src={t1} alt="Thank You" className="thank-image" />
      <h2>Thank You for Visiting Chillax! 🍦</h2>
      <p>
        We hope you enjoyed your ice cream! Your happiness makes our day sweeter.  
      </p>
      <p>
        We can't wait to serve you again. Stop by soon and try our new flavors!  
      </p>
      <h3>Stay Cool, Stay Chillax! ❄️</h3>

      <Button variant="success" style={{marginTop:"10px"}} onClick={()=>{navigate("/home")}}  >Check another...</Button>
    </div>
  );
};

export default Thank;
