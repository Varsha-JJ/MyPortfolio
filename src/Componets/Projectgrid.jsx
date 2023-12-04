import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Projectcard from './Projectcard';
import img from '../Images/kid.png';
import img1 from '../Images/project1.png';
import img2 from '../Images/recipe.png';
import img3 from '../Images/movie.png';
import img4 from '../Images/weather.png';


const Projectgrid = () => {
  return (
    <div>
     <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
            <Projectcard image={img} description="An online Kids store web application where the
            customer can purchase kids products online." title="Kids Store" tech="Python(Django) | PostgreSQL |
            Machine Learning" iconlink="https://github.com/Varsha-JJ/Main-Project"/>
        </Col>
        <Col md="auto">
            <Projectcard image={img1} description="Web application for tracking daily expenses." title="Expense Tracker" tech="Django | PostgreSQL" iconlink="https://github.com/Varsha-JJ/Expensetrack" />
        </Col>
        <Col md="auto">
            <Projectcard image={img2} title="Recipe Finder" description="A recipe finder web app designed to discover and accessing a wide variety of recipes. Users can search for recipes based on ingredients, name of receipe." 
            tech="React" iconlink="https://github.com/Varsha-JJ/Recipe-finder" demo="Demo" demolink="https://656051e89e435a11ed701219--gorgeous-belekoy-6092cb.netlify.app/"/>
        </Col>
        <Col md="auto">
            <Projectcard image={img3} title="Movie Search" description="Users can search for specific movies and access details such as cast, release dates, genres." tech="React" iconlink="https://github.com/Varsha-JJ/Movie_Search" demo="Demo" demolink="https://movie-search-eight-vert.vercel.app/"/>
        </Col>
        <Col md="auto">
            <Projectcard image={img4} title="Weather Forecasting" description="Accurate weather forecasts for any city with our user-friendly website, providing real-time updates to keep you prepared and informed." tech="React" iconlink="https://github.com/Varsha-JJ/Weather-Forecasting" demo="Demo" demolink="https://weatherforecastingclimate.vercel.app/"/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Projectgrid
