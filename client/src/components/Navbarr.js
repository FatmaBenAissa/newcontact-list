import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import Adduser from './Adduser';

function Navbarr({ping, setping}) {
  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Annuaire App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to="/">Users</Link></Nav.Link>
            <Nav.Link href="#action2"><Link to='/about'>About</Link></Nav.Link>
             <Nav.Link href="#action2"><Link to="/contact">Contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
         <Adduser ping={ping} setping={setping}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr