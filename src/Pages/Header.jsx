import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/style.css';

const Header = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='navheight'>
            <Container>
                <Nav.Link as={Link} to="/" className='leftnav leftnavfont'>Varsha JJ</Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='togglecollaspe'>
                <Nav className="me-auto">
                </Nav>      
                <Nav className='rightnav'>
                    <Nav.Link as={Link} to="/" className='rightnavfont'>Home</Nav.Link>
                    <Nav.Link as={Link} to="education"  className='rightnavfont'>Education</Nav.Link>
                    <Nav.Link as={Link} to="projects"  className='rightnavfont'>Projects</Nav.Link>
                    <Nav.Link as={Link} to="experience"  className='rightnavfont'>Experience</Nav.Link>
                    <Nav.Link as={Link} to="about"  className='rightnavfont'>About</Nav.Link>
                    <Nav.Link as={Link} to="contact"  className='rightnavfont'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Header
