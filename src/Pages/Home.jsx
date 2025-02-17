import "../CSS/Home.css"
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Produts from './Product';
import b1 from "../images/b1.jpg"
import b2 from "../images/b2.jpg"
import b3 from "../images/b3.jpg"
import b4 from "../images/b4.jpg"
import b5 from "../images/b54.jpg"

import g1 from "../images/grid1.jpg"
import g2 from "../images/grid2.jpg"
// import g3 from "../images/grid33.jpg"
import g4 from "../images/grid4.jpg"
import v1 from "../images/brand video.mp4"
import border from "../images/border.png"


import {  useNavigate } from 'react-router-dom';
import axios from "axios";




const Home = () => {

  
  const [carts, setCarts]= useState([]);
  let navigate = useNavigate()
  
   const loadData = async()=>{
    let api="http://localhost:3000/product"
   const mydata = await axios.get(api);
    console.log(mydata.data);
    setCarts(mydata.data)
   }

   useEffect(()=>{loadData()},[])



   let result = carts.map((key)=>{
    return(
      <>

      
      <Card  style={{ width: '18rem', border:"1px solid black" }} >
        <Card.Img id="cardImage" variant="top" src={key.img} />
        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
           quantity :-  {key.quantity}
          </Card.Text>
          <Card.Text>
            Price :- {key.price}
          </Card.Text>
          <Button variant="outline-warning" onClick={()=>{navigate("/buynow")}} >Add to Card</Button>
        </Card.Body>
      </Card>
    
      
      </>
    )
  })

  
 
  return(
    <>

<video id="video1"  autoPlay loop muted>
  <source src={v1} type="video/mp4" />
</video>


     <Carousel id='carousal'>
      <Carousel.Item>
        <img style={{width:"100%"}} src={b1} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:"100%"}} src={b2} alt="" />
        
      </Carousel.Item>


      <Carousel.Item>
      <img style={{width:"100%"}} src={b3} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img style={{width:"100%"}} src={b4} alt="" />
        
      </Carousel.Item>


      <Carousel.Item>
      <img style={{width:"100%"}} src={b5} alt="" />
       
      </Carousel.Item>
    </Carousel>
     

     
    <div className="cardsmain">
      <div className="heading">
      <h1 id='heading'>Top Selling Products</h1>
      <img src={border} alt="" />
      </div>
      

      <div className="card-container">
      {result}
      </div>

      <Button variant="outline-warning" onClick={()=>{navigate("/buynow")}}>Buy Now</Button>
    
      
    </div>







  
    
      
      <hr />
        
      <Container id="container-grid" fluid>
      <Row id='row1'>
        <Col  md={6}>
        <img   src={g1} /> 
        </Col>

        <Col md={6}>
        <img  src={g2}  />
        </Col>
      </Row>

      <Row id='row2'>
        <Col md={6} >
        <img id="ri1" src={g2}  />
        </Col>
        <Col  md={6} >
        <img id="ri2"  src={g4}  />
        </Col>
      </Row>
    </Container>
  
    </>
  )
 

}
export default Home