import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aboutimgcard from './Aboutimgcard';

const Aboutgrid = () => {
  return (
    <Container>
        <Row className="justify-content-md-center mt-5 mb-5">
        <Col md="auto"><Aboutimgcard/></Col>
        </Row>
    </Container>
  )
}

export default Aboutgrid
