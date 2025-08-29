import React, { useState }from 'react'


//Receives the main processing function and loading state from App.js

const LinkInput = ({ onProcessLinks, isLoading }) => {

    // this state is local to the input components
  const [inputvalue, setInputValue] = useState('')

  const handleProcessClick = () =>{
    // call the function from app.js, passing the local state up
    onProcessLinks(inputvalue)
  }
    return (
    <div className='input-section'>
       <textarea 
       placeholder='Paste your links here, one per line...'
       rows="10"
       value={inputvalue}
       onChange={(e) => setInputValue(e.target.value)} />

       <button onClick={handleProcessClick} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Process Links'}
       </button>
        </div>
  )
}

export default LinkInput