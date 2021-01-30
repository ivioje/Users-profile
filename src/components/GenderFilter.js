import React from 'react'

const GenderFilter = ({ filtering }) => {


  return (
    <div>
      
    <select id='gender' onChange={filtering} aria-label='filter by gender'>
      <option value='' placeholder='Filter by Gender'>All</option>
      <option value='Male'>Male</option>
      <option value='Female'>Female</option>
      <option value='Prefer to skip'>Prefer to skip</option>

    </select>
    </div>
  )
}

export default GenderFilter
