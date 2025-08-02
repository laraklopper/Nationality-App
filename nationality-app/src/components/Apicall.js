import React, { useRef, useState, useEffect } from 'react';// Import the React module to use React functionalities
import Button from 'react-bootstrap/Button';//Import Button component from bootstrap library
import Form from 'react-bootstrap/Form';//Import Form component from bootstrap library
import Stack from 'react-bootstrap/Stack';//Import Stack component from bootstrap library


// Apicall function component
export default function Apicall() {//Export the Apicall component
    // Load .env values
    
  //==============STATE AND REFS================
    // Set up state variables 'country' and 'name' 
    //set(State)Function updates the state to change the initial value
    const [country, setCountry] = useState(null);// Set up state variables 'country' and 'name'
    const [name, setName] = useState(""); // 'country' stores the fetched country data, 'name' stores the input value

    // Create a ref using the useRef hook
    const inputRef = useRef(null);//Ref is attatched to the input element   
    
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

             useEffect(()=>{
                 inputRef.current.focus()// Use the useEffect hook to focus on the input element when the component mounts
        },[])


    return (
        <div>
        
            {/* Input element that binds its value to the 'name' state variable and calls handleInputChange on change */}
            <Stack gap={3} direction='horizontal' style={{justifyContent:"center", alignContent:'center'}}>
                <Form id='apiForm'>                  
                        <Form.Group  controlId="Email">
                            <Form.Control 
                                type="text"  
                                value={name}  
                                onChange={(e)=> setName(e.target.value)} 
                                ref={inputRef}
                                autoComplete='off'
                                aria-label='name-input'
                                required
                                id='nameInput'
                                aria-required='true'
                                placeholder='Enter a name'
                              />
                        </Form.Group>
                        <Button 
                            type='button' 
                            variant='primary'
                            id='fetchButton'
                            onClick={fetchData}
                            aria-label='fetch-button'
                           
                            >
                                FETCH DATA
                        </Button>
                </Form>
            </Stack>
        <div>
                {/* Display the value of the 'country' state variable */}
                {country && <p className='output'>{JSON.stringify(country)}</p>}
        </div>
           
        </div>
    );
}

