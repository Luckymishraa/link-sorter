import React from 'react'
import LinkItem from './LinkItem' //it uses the link item component!


// receives the array of links as a prop
const LinkList = ({ links }) => {
  return (
    <div className='output-section'>
        <h2>Your Sorted Links ({links.length})</h2>
        {links.length > 0 ? (
            <ul>
                {links.map((link, index) =>(
                    //pass the data for each link down to the LinkItem component
              <LinkItem key={index} linkdData={link} />
              ))}
            </ul>
        ):(
            <p>Your processed links wil appear here...</p>
        )}
    </div>
  )
}

export default LinkList