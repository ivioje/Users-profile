import React, { Component } from 'react'
import '../App.css'
import CardList from '../components/CardList'
import SearchBox from './searchBox'
// import loader from '../image/785.gif'
import SkeletonCard from '../components/SkeletonCard.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles: [],
      error: null,
      isLoaded: false,
      searchfield: ''
    }
  }

  componentDidMount () {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(
        result => {
         const timer = setTimeout(() => {

            this.setState({ isLoaded: true, profiles: result.records.profiles });
          }, 5000);
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

  render () {
    const { error, isLoaded, profiles, searchfield } = this.state
    //search functionality
    const searchRecords = profiles.filter(users =>
      users.FirstName.toLowerCase().includes(searchfield.toLowerCase())
    )

    if (error) {
      return <div>Error</div>
    } else if (!isLoaded) {
      return (
        <div style={{textAlign: 'center'}}>
          <h3>this project is under construction</h3>
        <SkeletonCard />
        </div>
        // <div className='loader'>
        //   <img src={loader} alt='loader' />
        //   <p>please wait...</p>
        // </div>
      )
    } else {
      return (
        <div className='page'>
          <p>this project is under construction...</p>
          <h4>title & light/dark mode</h4>
          <h4>filter by : gender, payment method ...etc</h4>
          <SearchBox searchChange={this.onSearchChange} />

          <h4>pagination</h4>

          <CardList profiles={searchRecords} />
        </div>
      )
    }
  }
}

export default App
