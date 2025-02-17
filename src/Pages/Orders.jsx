import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { CiEdit } from "react-icons/ci";
import Button from 'react-bootstrap/Button';
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Orders = () => {
  const navigate = useNavigate()
  const [myData , setMyData] = useState([])
 
  const loadData = async ()=>{
    const api = "http://localhost:3000/orders";
    const res = await axios.get(api)
    console.log(res.data);
    setMyData(res.data)
  }
  useEffect(()=>{loadData()},[])
  const myDel = async (id)=>{
    const api = `http://localhost:3000/orders/${id}`;
      
    // alert(id)
    const res = await axios.delete(api);
    // console.log(res.data);
    message.error("Order Deleted Successfully")
    
    loadData()
  }

  const myEdit = (id)=>{
        // alert(id)
        navigate(`/edit/${id}`)

      
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
        <td><MdDeleteForever style={{fontSize:"20px", color:"red", cursor:"pointer"}}  onClick={()=>{myDel(key.id)} }/>


        </td>
       
       <td>
       <CiEdit style={{cursor:"pointer" ,fontSize:"20px"}} onClick={()=>{myEdit(key.id)}}   />
       </td>
      </tr>
      
      
      
      </>
    )
  })

  return (
     <>
      <div style={{display:"flex",flexDirection:"column", alignItems:"center" ,margin:"50px"}} >
      <h3>Customer's Order Data</h3>

      <Button variant="outline-warning" style={{margin:"20px"}}
       onClick={()=>{navigate("/search")}}>Search Data</Button>

      <Table striped bordered hover style={{textAlign:"center"}}>

      <thead>
        <tr>
          <th>SNo</th>
          <th>Falavor</th>
          <th>Size</th>
          <th>Quantity</th>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Delete</th>
          <th>Edit</th>

         
        </tr>
      </thead>

      <tbody>

        {result}
      </tbody>

      </Table>

      </div>
     
    


     </>
  )
}

export default Orders