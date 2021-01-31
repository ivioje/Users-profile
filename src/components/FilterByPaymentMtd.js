import React from 'react'

const FilterByPaymentMtd = ({ paymentMtd }) => {
  return (
    <>
      <label>Filter by payment method</label>
      
      <select onChange={e => paymentMtd(e)}>
        <option value=''>All</option>
        <option value='check'>Check</option>
        <option value='cc'>CC</option>
        <option value='money order'>Money Order</option>
        <option value='paypal'>paypal</option>
      </select>
    </>
  )
}

export default FilterByPaymentMtd
