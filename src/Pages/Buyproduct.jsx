import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../CSS/Buyproduct.css"
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Buyproduct = () => {

 const navigate = useNavigate()
  const [ input , setInput] = useState({})
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(Values=>({...Values,[name]:value}))
    console.log(input);
  }
  const handleSubmit = async ()=>{
    const api = "http://localhost:3000/orders";
    const res = await axios.post(api , input);
    // console.log(res.data);
    message.success("Your order is ready...!")
    navigate("/thank")

    

  }

  return (
    <>
      <center>
        <div className="formMain">
          <Form>
            <Form.Group
              className="mb-4"
              controlId="formBasicEmail"
              style={{ maxWidth: "400px" }}
            >


             <Form.Label>choose Flavor</Form.Label>
              <Form.Select name="flavor" value={input.falvor} onChange={handleInput}     aria-label="Default select example">

                <option>Flavor</option>
                <option value="Vanilla">Vanilla </option>
                <option value="chocolate"> Chocolate</option>
                <option value="strawberry">Strawberry</option>
                <option value="mango">Mango</option>
                <option value="Butterscotch">Butterscotch</option>
              </Form.Select>




              <Form.Label>choose Size</Form.Label>
              <Form.Select  name="size" value={input.size} onChange={handleInput}  aria-label="Default select example">
                <option>Size</option>
                <option value="small">Small </option>
                <option value="Medium"> Medium</option>
                <option value="Large">Large</option>
                <option value="Family Pack">Family Pack</option>
                
              </Form.Select>

              <Form.Label>Quantity</Form.Label>
              <Form.Control type="Number" name="quantity" placeholder="0" value={input.quantity} onChange={handleInput}  />





              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control type="text" placeholder="Name" name="uname" value={input.uname} onChange={handleInput}  />

              <Form.Label>Enter Mobile No.</Form.Label>
              <Form.Control type="text" placeholder="Mobile" name="mobile" value={input.mobile} onChange={handleInput} />

             
                <Form.Label>Delivery Address</Form.Label>
                <Form.Control as="textarea"rows={2} placeholder="Full Address" name="add" value={input.add} onChange={handleInput} />
            

            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}  >
              Submit
            </Button>
          </Form>
        </div>
      </center>
    </>
  );
};

export default Buyproduct;
