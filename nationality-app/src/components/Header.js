import React from 'react'// Import the React module to use React functionalities
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Header funtion component
export default function Header() {//Export Header function component

  //===============JSX RENDERING================
  return (
    // Render a header element with an id and role
    <Row id='headerRow' aria-labelledby="main-title">
    <header id='header' role='banner' aria-label="Main header">
     
          <Col id='headerCol'>
          <h1 className='h1' id="mainTitle">NATIONALITY API</h1>
          </Col>
       
    </header>
     </Row >
  )
}
