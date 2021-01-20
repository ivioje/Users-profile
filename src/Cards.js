import React from 'react'
import './index.css'

const Cards = ({ UserName, FirstName, LastName,Gender, Email }) => {
  return (
    <div key={UserName} className='users'>
      <div className="header"> 
        <h2>{FirstName}</h2>
        <h2>{LastName}</h2>
      </div>
      <div>
          <p>Gender : {Gender}</p>
          <p>Email : {Email}</p>
      </div>

    </div>
  )
}

export default Cards
