import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { message } from "antd";

const Edit = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  // console.log(id);
  
 const [myData ,setMyData] = useState({})
  const [ input , setInput] = useState({})

  const loadData = async ()=>{
    const api = `http://localhost:3000/orders/${id}`;
    const res = await axios.get(api)
    console.log(res.data);
    setInput(res.data)
    
  }
    useEffect(()=>{loadData()},[])
    console.log(myData);

    const handleInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInput(Values=>({...Values,[name]:value}))
      console.log(input);
    }

    const handleSubmit = async ()=>{
      const api = `http://localhost:3000/orders/${id}`;
      const res = await axios.put(api , input);
      // console.log(res.data);
      message.success("Order has been Updated...!")
      navigate("/order")
  
      
  
    }
  



  return (
    <>
    

    <div>
          
    <h1>Edit Data </h1>
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

    
    </div>
     

    

     


    </>



  )
}

export default Edit