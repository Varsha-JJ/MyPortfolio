import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import image from '../Images/img.png'

const Homeimgcard = () => {
  return (
    <div>
       <Card className='homecard'>
        <Card.Body className='homecardbody'>
            <img src={image} alt="" className='imghome'  />
        </Card.Body>
    </Card>
    </div>
  )
}

export default Homeimgcard
