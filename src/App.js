import React, { Component } from 'react'
import './App.css'
import CardList from './CardList.js'

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
        <div className="page">
          <h1>Users profiles</h1>
          <CardList profiles = {profiles}/>

        </div>
       

        // <div>
        //   {profiles.map((profile, i) => {
        //     return (
        //       <ul key={profile.UserName} className='users'>
        //         <li>{profile.FirstName}</li>
        //         <li>{profile.LastName}</li>
        //       </ul>
        //     )
        //   })}
        // </div>
      )
    }
  }
}

export default App
