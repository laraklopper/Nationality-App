import React from 'react'// Import the React module to use React functionalities
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Header funtion component
export default function Header() {//Export Header function component

  //===============JSX RENDERING================
  return (
    <header id='header' role='banner'>
        <Row id='headerRow'>
          <Col id='headerCol'><h1 className='h1'>NATIONALITY API</h1></Col>
        </Row>
    </header>
  )
}
