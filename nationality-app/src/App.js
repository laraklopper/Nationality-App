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
  
    <Container id='container'>
        <Header />   
        <section id='section1'>
          <Apicall />
        </section>
        </Container>
  
</>
  );
}


