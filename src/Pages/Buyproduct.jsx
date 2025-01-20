import React from 'react'
import Form from 'react-bootstrap/Form';
import "./Buyproduct.css"
const Buyproduct = () => {
  return (
    <>
       <div className="main">


        <h1>Product form</h1>
        <form action="">

          <label htmlFor="">Name</label>
          <input type="text" />



          <Form.Select aria-label="Default select example">
            <option>select Ice Cream </option>
            <option value="1">Big Chocobar Easy Pack - 75ml</option>
            <option value="2">Unicone Butterscotch 120ML - 120ml</option>
             <option value="3">Big Mango Duble Easy Pack - 75ml</option>
           </Form.Select>
         


        </form>
       </div>
       
    
    </>
  )
}

export default Buyproduct