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
        Hi all, I am Varsha JJ from Kerala, India. <br/>
        I completed my Masters in Computer Application (MCA) from Amal Jyothi College of Engineering. Additionally,
        I am currently intern as Frontend Developer at Softroniics.
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
