import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container id='nav-container' fluid>
          <Navbar.Brand  as={Link} to='home'>Chill <span style={{color:"greenyellow",fontSize:"50px"}}>ax</span> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                
              <Nav.Link as={Link} to="/home">Home</Nav.Link>  

              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/offers">Offers</Nav.Link>
              <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>Disabled</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="user">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                
            </div>
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </>
  );
};

export default Header;
