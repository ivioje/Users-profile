import React from 'react'
import Cards from '../components/Cards'
import '../index.css'

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
              CreditCardNumber={profile.CreditCardNumber}
              CreditCardType={profile.CreditCardType}
              DomainName={profile.DomainName}
              PhoneNumber={profile.PhoneNumber}
              username={profile.UserName}
              PaymentMethod={profile.PaymentMethod}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardList
