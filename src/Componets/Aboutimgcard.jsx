import React from 'react';
import Card from 'react-bootstrap/Card';
import about from '../Images/about1.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Aboutimgcard = () => {
  return (
    <div>
      <Card className="bg-dark text-white abtsty">
      <Card.Img src={about} alt="Card image" className='imgheight' />
      <Card.ImgOverlay>
        <Card.Text className='abtpara mt-5'>
        I am a software developer with a passion for web development. I have a background in computer science and mathematics, 
        and I have a strong interest in the intersection 
        of technology and art. I am currently working as a software developer at example org. in San Francisco, CA.
        </Card.Text>
        <Card.Text className='abtpara'>Here are a few technologies I've been working with recently:</Card.Text>
        <Card.Text>
            <Row className="justify-content abtparali">
                <Col sm={3}>
                    <ul>
                        <li>HTM/CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                    </ul>
                </Col>
                <Col sm={3}>
                <ul>
                    <li>React</li>
                    <li>Python</li>
                    <li>Django, DRF</li>
                </ul>
            </Col>
            </Row>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default Aboutimgcard
