import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Experiencecard = () => {
    

  return (
    <div className='cardalignedu'>
        <Card style={{ width: '50rem' }} className='mt-3 border-0'>
            <ListGroup variant="flush">
                <ListGroup.Item>
                        <Card.Body className='expe'>
                            <Card.Title className='titles'>Frontend Development Intern</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">Softroniics, Kozikode | Kerala</Card.Subtitle>
                            <Card.Text className='text'>Skills : HTML | CSS | JS | REACT</Card.Text>
                            <Card.Text className='text'>Tools : VS Code | Git</Card.Text>
                            <Card.Text className='text'>September 2023 - Present</Card.Text>
                        </Card.Body>
                </ListGroup.Item>
                <ListGroup.Item>
                <Card.Body className='expe'>
                        <Card.Title className='titles'>Full stack - Django Intern</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">Techjays | Chennai</Card.Subtitle>
                            <Card.Text className='text'>Skills : Python, Django , DRF</Card.Text>
                            <Card.Text className='text'>Tools : VS Code | Git</Card.Text>
                            <Card.Text className='text'>October 2023 - Present</Card.Text>
                        </Card.Body>
                </ListGroup.Item>
                <ListGroup.Item>
                <Card.Body className='expe'>
                        <Card.Title className='titles'>Django Intern</Card.Title>
                            <Card.Subtitle className="mb-3 text-muted">Hexcent Pvt. Ltd Ernakulam | Kerala</Card.Subtitle>
                            <Card.Text className='text'>Skills : HTML | CSS | JS | REACT</Card.Text>
                            <Card.Text className='text'>Tools : VS Code </Card.Text>
                            <Card.Text className='text'>July 2022 - September 2022</Card.Text>
                        </Card.Body>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
  )
}

export default Experiencecard
