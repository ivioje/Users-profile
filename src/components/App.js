import React, { Component } from 'react'
import '../App.css'
import CardList from '../components/CardList'
import SearchBox from './searchBox'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles: [],
      error: null,
      isLoaded: false
    }
  }

  componentDidMount () {
    fetch('https://api.enye.tech/v1/challenge/records')
      .then(res => res.json())
      .then(
        result => {
          this.setState({ isLoaded: true, profiles: result.records.profiles })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, profiles } = this.state

    if (error) {
      return <div>Error</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className='page'>
          <p>this project is under construction...</p>
          <h4>title & light/dark mode</h4>
          <h4>filter by : gender, payment method ...etc</h4>
          <SearchBox />
          <h4>pagination</h4>

          <CardList profiles={profiles} />
        </div>
      )
    }
  }
}

export default App
