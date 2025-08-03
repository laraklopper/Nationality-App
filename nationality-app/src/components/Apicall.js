import React, { useRef, useState, useEffect } from 'react';// Import the React module to use React functionalities
import './APIForm.css';//Import Apicall CSS file
import './Output.css';//Import Output CSS file
import Button from 'react-bootstrap/Button';//Import Button component from bootstrap library
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Apicall function component
export default function Apicall() {//Export the Apicall component
   
    
  //==============STATE AND REFS================
    // Set up state variables 'country' and 'name' 
    //set(State)Function updates the state to change the initial value
    const [country, setCountry] = useState(null);// Set up state variables 'country' and 'name'
    const [name, setName] = useState(""); // 'country' stores the fetched country data, 'name' stores the input value

    // Create a ref using the useRef hook
    const inputRef = useRef(null);//Ref is attatched to the input element  

    //===============API CALL================
    // Define an async function 'fetchData' to fetch the API data
        const fetchData = async () => {// Define an async function 'fetchData' to fetch the API data
            try {
                const response = await fetch(`https://api.nationalize.io?name=${name}`);//Fetch Data from the API        
                const data = await response.json();// Convert the response to JSON

                setCountry(data.country[0]);// Update the 'country' state variable with the fetched data
                console.log(data);// Display the data in the console
                
            } catch (error) {
                console.log(error);
            }
        inputRef.current.focus()    
            // Make the API call using the Fetch API and the retrieved name value
        };

        //===============FOCUS ON INPUT================
        // Use the useEffect hook to focus on the input element when the component mounts
        useEffect(()=>{
            inputRef.current.focus()// Use the useEffect hook to focus on the input element when the component mounts
        },[])

    //===============JSX RENDERING================
     // Render the component's JSX

    return (
        <div id='apiCallContainer' role='region' aria-label="API Call Section">
            <form id='apiForm'>
                <Row id='formRow1'>
                    <Col  className='col'>
                    <label htmlFor='nameInput' className='label' id='nameLabel'>
                       <p id='labelText'>Enter a name to get the country</p>
                        <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={inputRef}
                        autoComplete='off'
                        required
                        id='nameInput'
                        aria-label='name-input'
                        aria-required='true'        
                        placeholder='Enter a name'
                        />
                        </label>
                        </Col>
                </Row>
                <Row id='formRow2'>
                    <Col className='col'>
                        <Button
                            type='button' 
                            variant='primary'
                            id='fetchButton'
                            onClick={fetchData}
                            aria-label='fetch-button'
                            role='button'>
                            FETCH DATA
                        </Button>
                        </Col>
                </Row>
            </form>
            <div id='outputContainer'>
            <Row id='outputRow'>
                <Col className='col' id='outputCol'>
                    <h2 className='h2'>Country Data</h2>  
                    {/* Display the fetched country data */}
                    {/* Display the value of the 'country' state variable */}
                    {country && <p className='output'>{JSON.stringify(country)}</p>}
                </Col>
            </Row>
            </div>
        </div>
    );
}

