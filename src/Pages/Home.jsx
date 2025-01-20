import "./Home.css"
import React from 'react'
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


import { useLocation, useNavigate } from 'react-router-dom';

let result = Produts.map((key)=>{
  return(
    <>
    <Card style={{ width: '18rem', border:"1px solid black" }}>
      <Card.Img id="cardImage" variant="top" src={key.images} />
      <Card.Body>
        <Card.Title>Item :{key.name}</Card.Title>
        <Card.Text>
         Brand :-  {key.brand}
        </Card.Text>
        <Card.Text>
          Price :- {key.price}
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    
    </>
  )
})

const Home = () => {
  let navigate = useNavigate()
  let buyNow = ()=>{
    navigate("/buynow")
  }
  return(
    <>
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
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
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
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img style={{width:"100%"}} src={b5} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
    <div className="cards">
      <h1 id='heading'>Top Selling Products</h1>
      {/* {result} */}
    </div>
    <center>
    <Button variant="outline-warning" onClick={buyNow}>Buy Now</Button>
    </center>
      
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