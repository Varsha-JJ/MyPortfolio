import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projectcard from './Projectcard';
import img from '../Images/kid.png';
import img1 from '../Images/project1.png';
import img2 from '../Images/recipe.png';


const Projectgrid = () => {
  return (
    <div>
     <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
            <Projectcard image={img} description="An online Kids store web application where the
            customer can purchase kids products online." title="Online Kids Store" tech="Python(Django) | PostgreSQL |
            Machine Learning" iconlink="https://github.com/Varsha-JJ/Main-Project"/>
        </Col>
        <Col md="auto">
            <Projectcard image={img1} description="Web application for tracking daily expenses." title="Expense Tracker" tech="Django | PostgreSQL" iconlink="https://github.com/Varsha-JJ/Expensetrack" />
        </Col>
        <Col md="auto">
            <Projectcard image={img2} title="Recipe Finder" description="Web application for searching recipe." tech="React" iconlink="https://github.com/Varsha-JJ/Recipe-finder" demo="View" demolink="https://656051e89e435a11ed701219--gorgeous-belekoy-6092cb.netlify.app/"/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Projectgrid
