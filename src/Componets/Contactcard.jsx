import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contactcard = (props) => {
  return (
    <div>
       <Card className='contentcard'>
            <Card.Body className='contactbody'>{props.content}</Card.Body>
        </Card>
    </div>
  )
}

export default Contactcard
