import React from 'react'// Import the React module to use React functionalities
import './App.css';//Import main CSS file
import Header from './components/Header';//Import Header component
import Apicall from './components/Apicall';//Import Apicall component
import Container from 'react-bootstrap/Container';

//App function component
export default function App() {//Export App function component

  //===============JSX RENDERING================
  
  return (
  <>
  {/* App container */}
    <Container id='container' role='main' aria-label="Main content">
        {/* Render the header component */}
        <Header />   
        {/* Section 1 */}
        <section id='section1' role='region' aria-label="API Call Section">
          {/* Render the Apicall component */}
          <Apicall />
        </section>
        </Container>
</>
  );
}


