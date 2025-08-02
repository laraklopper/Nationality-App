import React from 'react'// Import the React module to use React functionalities
import './Header.css';//Import Header CSS file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Header funtion component
export default function Header() {//Export Header function component

  //===============JSX RENDERING================
  return (
    // Render a header element with an id and role
    <Row id='headerRow' aria-labelledby="main-title">
    <header id='header' role='banner' aria-label="Main header">
      {/* Render a column with an id and className */}
          <Col id='headerCol'>
            <h1  id="mainTitle" aria-label='mainTitle'>
              NATIONALITY API
            </h1>
          </Col>
    </header>
     </Row >
  )
}
