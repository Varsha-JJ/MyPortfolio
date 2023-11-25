import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const Heading = (props) => {
  return (
    <div>
    <Card className='headingcard'>
      <Card.Body className='headbody'>{props.heading}</Card.Body>
    </Card>
    </div>
  )
}

export default Heading
