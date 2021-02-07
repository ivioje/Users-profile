import React from 'react'
import SearchBox from './searchBox'

const Header = ({ currentCard, searchfield, searchChange }) => {
  //search functionality

  const searchRecords = currentCard.filter(
    users =>
      users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
      users.LastName.toLowerCase().includes(searchfield.toLowerCase())
  )

  return (
    <div>
      <p>this project is under construction...</p>
      <h4>title & light/dark mode</h4>
      <SearchBox searchChange={searchChange} searchRecords={searchRecords}/>
    </div>
  )
}

export default Header
