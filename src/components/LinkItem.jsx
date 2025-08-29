import React from 'react'

//This component will recieve data for one link via props
const LinkItem = ({ linkdData }) => {
  return (
<li>
    {linkdData.favicon ? (
        <img src={linkdData.favicon} alt="favicon" className='favicon' />
     ) :(
        // A placeholder for individuals URLs
<span className='favicon-placeholder'> 🔗</span> 
)}

<a href={linkdData.url} target="_blank" rel="noopener noreferrer">{linkdData.url}</a>     
  
</li>
    
  )
}

export default LinkItem