import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


const Educationcard = () => {
    const [tab,setActivetab] = useState('master');

    const handlechange = (selectedtab)=>{
        setActivetab(selectedtab)
    }

  return (
    <div className='cardalignedu'>
       <Card className='mt-5 educard'>
        <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#master">
            <Nav.Item>
                <Nav.Link href="#master" onClick={()=>handlechange('master')} className='navclr'>Masters</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#bachelor" onClick={()=>handlechange('bachelor')} className='navclr'>Bachelor</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#hsc" onClick={()=>handlechange('hsc')} className='navclr'>Higher Secoundry</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#sslc" onClick={()=>handlechange('sslc')} className='navclr'>SSLC</Nav.Link>
            </Nav.Item>
            </Nav>
        </Card.Header>
        <Card.Body id="master" style={{ display: tab === 'master' ? 'block' : 'none' }}>
            <Card.Title>Master of Computer Application | 2021-2023</Card.Title>
            <Card.Text>
            APJ Abdul Kalam Technological University
            </Card.Text>
            <Card.Text>
            Amal Jyothi College Of Engineering, Kottayam 
            </Card.Text>
            <Card.Text>
            CGPA : 8.06
            </Card.Text>
        </Card.Body>
        <Card.Body id="bachelor" style={{ display: tab === 'bachelor' ? 'block' : 'none'}}>
        <Card.Title>Bachelor of Computer Application | 2018-2021</Card.Title>
            <Card.Text>
            Bharathiar University
            </Card.Text>
            <Card.Text>
            Nilgiri College Of Arts and Science, Thaloor
            </Card.Text>
            <Card.Text>
            CGPA : 7.8
            </Card.Text>
        </Card.Body>
        <Card.Body id="bachelor" style={{ display: tab === 'hsc' ? 'block' : 'none'}}>
        <Card.Title>Higher Secondary | 2016-2018</Card.Title>
        <Card.Text>
        G.V.H.S.S Ambalavayal
            </Card.Text>
            <Card.Text>
            Kerala State Board
            </Card.Text>
            <Card.Text>
           Percentage : 80%
            </Card.Text>
        </Card.Body>
        <Card.Body id="bachelor" style={{ display: tab === 'sslc' ? 'block' : 'none'}}>
        <Card.Title>SSLC | 2016</Card.Title>
        <Card.Text>
        ST. Joseph's Higher Secondary School, Sulthan Bathery
            </Card.Text>
            <Card.Text>
            Kerala State Board
            </Card.Text>
            <Card.Text>
            Percentage : 80%
            </Card.Text>
        </Card.Body>
    </Card>
    </div>
  )
}

export default Educationcard
