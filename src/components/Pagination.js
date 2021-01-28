import React from 'react'
import '../index.css'

const Pagination = ({ cardPerPage, totalCards, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className='paginate'>
      <div>
        {pageNumbers.map(number => (
          <p key={number}>
            <a href='!#' onClick={() => paginate(number)}>
              {number}
            </a>
          </p>
        ))}
      </div>
    </div>
  )
}

export default Pagination
