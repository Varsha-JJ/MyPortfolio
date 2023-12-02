import React from 'react';
import Heading from '../Componets/Heading'
import Aboutgrid from '../Componets/Aboutgrid';
import Educationcard from '../Componets/Educationcard';
import Foot from './Foot';
import Experiencecard from '../Componets/Experiencecard';

const About = () => {
  return (
    <div>
      <Heading heading="About Me"/>
      <Aboutgrid/>
      <Heading heading="Experience"/>
      <Experiencecard/>
      <Heading heading="Eductaion"/>
      <Educationcard/>
      <Foot/>
    </div>
  )
}

export default About
