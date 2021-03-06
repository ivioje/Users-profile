import React from 'react'

const FilterByPaymentMtd = ({ paymentMtd }) => {
  return (
    <div style={{display: 'block'}}>
      <label>Filter by payment method</label>

      <select onChange={e => paymentMtd(e)}>
        <option value=''>All</option>
        <option value='check'>Check</option>
        <option value='cc'>CC</option>
        <option value='money order'>Money Order</option>
        <option value='paypal'>paypal</option>
      </select>
    </div>
  )
}

export default FilterByPaymentMtd
