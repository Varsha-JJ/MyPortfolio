import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaGithub } from "react-icons/fa";
import {  Link } from "react-router-dom";

const Projectcard = (props) => {
  return (
    <div>
       <Card className='projectcardsize'>
        <Card.Img variant="top" src={props.image} className='imgsize' />
        <Card.Body className='cardbody'>
          <Card.Title className='projecttit'>{props.title}</Card.Title>
          <Card.Text>
            {props.description} 
          </Card.Text>
          <Card.Text><span className='tech'>Technologies used :</span> {props.tech}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <a href={props.iconlink}><FaGithub className='git'/></a>
            <a href={props.demolink} className='demo'>{props.demo}</a>
          </small>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Projectcard
