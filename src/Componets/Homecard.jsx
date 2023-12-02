import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import resume from '../Images/Varsha_JJ_Resume.pdf'

const Homecard = () => {
  return (
    <div>
      <Card className='homecard'>
        <Card.Body className='homecardbody'>
            <Card.Title className='namestyle'>I’m Varsha JJ <span className='smiley'>&#128075;</span></Card.Title>
            <Card.Subtitle className="mt-2 desstyle">I'm a Frontend Developer</Card.Subtitle>
            <Card.Text className='mt-4'>
            I am a dedicated web app developer who loves using the latest web technologies to create websites
             that are visually 
            appealing, provide an excellent user experience, and work seamlessly.
            </Card.Text>
            <div className='hmebtn'>
               <Link to="contact"> <button className='btnhomestyle'>Contact me</button></Link>
                <a href={resume} download="resume"><button className='btnhomestyles'>Download Resume</button></a>
            </div>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Homecard
