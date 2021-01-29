import React from 'react'
import '../index.css'

const searchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='search profiles...'
        onChange={searchChange}
      />
    </div>
  )
}

export default searchBox
