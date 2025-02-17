import React, { useState } from 'react'
import "../CSS/Search.css"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Search = () => {
  const [input , setInput] = useState("")
  // console.log(input);
  const [myData , setMyData] = useState([])

  const handleSubmit = async ()=>{

 const api = `http://localhost:3000/orders/?mobile=${input}`;

 try {
  const res = await axios.get(api);

  // console.log(res);
  setMyData(res.data)
  
 } catch (error) {
  alert(error)
  
 }
 
  
  }
  let sno=0;
    const result = myData.map((key)=>{
      sno++
      return(
        <>
        <tr>
          <td>{sno}</td>
          <td>{key.flavor}</td>
          <td>{key.size}</td>
          <td>{key.quantity}</td>
          <td>{key.uname}</td>
          <td>{key.add}</td>
          <td>{key.mobile}</td>
         
         
         
        </tr>
        
        
        
        </>
      )
    })
   



  return (
    <>

    <div className='mainCover'>
    <h3>Search Data</h3>
      
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile Number</Form.Label>

      <Form.Control type="Number" placeholder="Mobile" name='mob' value={input} onChange={(e)=>{setInput(e.target.value)}} />
        
      </Form.Group>

      
      
      <Button variant="primary" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>



    </div>
     <hr />
     <Table striped bordered hover style={{textAlign:"center" }}>

      <thead>
        <tr>
          <th>SNo</th>
          <th>Falavor</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
        

         
        </tr>
      </thead>

      <tbody>

        {result}
      </tbody>

      </Table>
    
    
    </>
  )
}

export default Search