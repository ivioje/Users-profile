import React from 'react'
import '../index.css'

const Cards = ({
  UserName,
  FirstName,
  LastName,
  Gender,
  Email,
  CreditCardNumber,
  CreditCardType,
  DomainName,
  PhoneNumber,

  PaymentMethod
}) => {
  return (
    <div key={UserName} className='users'>
      <div className='header'>
        <p>{FirstName.toUpperCase()}</p>
        <p>{LastName.toUpperCase()}</p>
      </div>
      <div>
        <p>
          Gender : <b> {Gender} </b>{' '}
        </p>
        <p>
          Email : <b> {Email} </b>{' '}
        </p>
        <p>
          UserName : <b> {UserName}</b>
        </p>
        <p>
          CreditCardNumber : <b>{CreditCardNumber}</b>
        </p>
        <p>
          CreditCardType :<b> {CreditCardType}</b>
        </p>
        <p>
          PhoneNumber :<b> {PhoneNumber}</b>
        </p>

        <p>
          PaymentMethod :<b> {PaymentMethod}</b>
        </p>

        <p>
          DomainName : <b>{DomainName}</b>
        </p>
      </div>
    </div>
  )
}

export default Cards
