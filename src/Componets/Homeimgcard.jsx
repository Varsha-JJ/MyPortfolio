import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import image from '../Images/pro.jpg'

const Homeimgcard = () => {
  return (
    <div>
       <Card className='homecard'>
        <Card.Body className='homecardbody'>
            <img src={image} alt="" width="500px" height="500px" />
        </Card.Body>
    </Card>
    </div>
  )
}

export default Homeimgcard
