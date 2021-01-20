import React from 'react'
import Cards from './Cards.js'
import './index.css'

const CardList = ({ profiles }) => {
  return (
    <div className='app'>
      {profiles.map(profile => {
        return (
          <div className='all_details' key={profile.UserName}>
            <Cards
              FirstName={profile.FirstName}
              LastName={profile.LastName}
              UserName={profile.UserName}
              Gender={profile.Gender}
              Email={profile.Email}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardList
