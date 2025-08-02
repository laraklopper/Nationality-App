import React from 'react'// Import the React module to use React functionalities

//Header funtion component
export default function Header() {//Export Header function component
  const title = process.env.REACT_APP_TITLE || 'NATIONALITY API'; // Load title from environment variable or use default

  //===============JSX RENDERING================
  return (
    <header id='header'>
        <div id='heading'>
            <h1 className='h1'>{title}</h1>
        </div>
    </header>
  )
}
