import React from 'react'
import GenderFilter from './GenderFilter'
import FilterByPaymentMtd from './FilterByPaymentMtd'
import '../index.css'

const SideNav = ({ genderChange, paymentMtd }) => {
  
  return (
    <div className='sidebar'>
        <div className='navItems'>
      <GenderFilter genderChange={genderChange} />
      <FilterByPaymentMtd paymentMtd={paymentMtd} />
      </div>
    </div>
  )
}

export default SideNav
