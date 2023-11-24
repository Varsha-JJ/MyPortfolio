import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homecard from './Homecard';
import Homeimgcard from './Homeimgcard';

const Homegrid = () => {
  return (
    <div>
       <Container>
        <Row className="homecardalign">
            <Col md="auto"><Homecard/></Col>
            <Col md="auto"><Homeimgcard/></Col>
        </Row>
    </Container>
    </div>
  )
}

export default Homegrid
