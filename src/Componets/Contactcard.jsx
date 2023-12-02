import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contactcard = () => {
  return (
    <div>
      <Card className='border-0'>
        <Card.Body className='d-flex justify-content-center border-0'>
          <Card.Text className='contacttitle'>Feel free to contact</Card.Text>
        </Card.Body>
        <Card.Body   className='alignicons border-0'>
          <a href="https://github.com/Varsha-JJ?tab=repositories"><div className='icon-box'> <FaGithub className='iconss' /></div> </a>
          <a href="https://www.linkedin.com/in/varsha-jj-051555206/"> <div className='icon-box'><FaLinkedin className='iconss'/></div> </a>
          <a href="mailto:varshajj2000@gmail.com"><div className='icon-box'><MdEmail className='iconss'/></div></a>  
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contactcard
