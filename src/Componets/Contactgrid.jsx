import React from 'react';
import Contactcard from './Contactcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { HiHome } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contactgrid = () => {
  return (
    <Container>
    <Row className="justify-content-md-center mt-5">
      <Col sm={1}><Contactcard content={<HiHome className='icons' />} /></Col>
      <Col sm={3}><Contactcard content="Jitheeshalam(HO), Chulliyode(PO), Sulthan Bathery, Wayanad ,673592" /></Col>
    </Row>
    <Row className="justify-content-md-center mt-3">
      <Col sm={1}><Contactcard content={<IoMdMail  className='icons' />} /></Col>
      <Col sm={3}><Contactcard content="varshajj2000@gmail.com" /></Col>
    </Row>
    <Row className="justify-content-md-center mt-5 contactrow">
      <Col sm={3}>Connect me on Linkedin <a href='https://www.linkedin.com/in/varsha-jj-051555206/'><FaLinkedin/></a></Col>
    </Row>
  </Container>
  )
}

export default Contactgrid
