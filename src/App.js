import React, { Component } from 'react'
import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'
import Pagination from './components/Pagination'
import SkeletonCard from './components/SkeletonCard.js'
import SideNav from './components/SideNav'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles: [],
      error: null,
      isLoaded: false,
      searchfield: '',
      genderfield: '',
      paymentFilter: '',
      currentPage: 1,
      cardPerPage: 20
    }
  }

  componentDidMount () {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(
        result => {
          const timer = setTimeout(() => {
            this.setState({ isLoaded: true, profiles: result.records.profiles })
          }, 2000)
          return () => clearTimeout(timer)
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value })
  }

  onGenderChange = e => {
    this.setState({ genderfield: e.target.value })
  }

  onPaymentMtdChange = e => {
    this.setState({ paymentFilter: e.target.value })
  }

  render () {
    const {
      error,
      isLoaded,
      profiles,
      searchfield,
      genderfield,
      currentPage,
      cardPerPage,
      paymentFilter
    } = this.state
    //pagination
    const indexOfLastCard = currentPage * cardPerPage
    const indexOfFirstCard = indexOfLastCard - cardPerPage
    const currentCard = profiles.slice(indexOfFirstCard, indexOfLastCard)
    //change page
    const paginate = pageNumber => this.setState({ currentPage: pageNumber })

    //search functionality
    let searchRecords = currentCard.filter(
      users =>
        users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
        users.LastName.toLowerCase().includes(searchfield.toLowerCase())
    )

    // gender functionality
    const genderRecords = currentCard.filter(({ Gender }) => {
      return Gender.includes(genderfield)
    })

    let displayProfiles = currentCard

    if (genderfield.length) {
      displayProfiles = genderRecords

      if (searchfield.length >= 1)
        searchRecords = genderRecords.filter(
          users =>
            users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
            users.LastName.toLowerCase().includes(searchfield.toLowerCase())
        )
    }
    if (searchfield.length >= 1) {
      displayProfiles = searchRecords
    }

    //filter by payment method
    const filterByPayment = currentCard.filter(({ PaymentMethod }) => {
      return PaymentMethod.includes(paymentFilter)
    })
    if (paymentFilter.length) {
      displayProfiles = filterByPayment

      if (searchfield.length >= 1)
        searchRecords = filterByPayment.filter(
          users =>
            users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
            users.LastName.toLowerCase().includes(searchfield.toLowerCase())
        )
    }

    if (searchfield.length >= 1) {
      displayProfiles = searchRecords
    }

    //rendering
    if (error) {
      return <div className='error'>!Please check your internet connection</div>
    } else if (!isLoaded) {
      return (
        <div style={{ textAlign: 'center' }}>
          <h3>this project is under construction</h3>
          <SkeletonCard />
        </div>
      )
    } else {
      return (
        <div>
          <div>
          <Header
            profiles={profiles}
            currentCard={currentCard}
            searchChange={this.onSearchChange}
            searchfield={searchfield}
          />
          </div>
          <div className='body'>
          <SideNav
            genderChange={this.onGenderChange}
            paymentMtd={this.onPaymentMtdChange}
          />
          <CardList profiles={displayProfiles} />
          </div>
          <Pagination
            cardPerPage={cardPerPage}
            totalCards={profiles.length}
            paginate={paginate}
          />
        </div>
      )
    }
  }
}

export default App
