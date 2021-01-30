import React, {Component} from "react";
import "./App.css";
import CardList from "./components/CardList";
import GenderFilter from "./components/GenderFilter";
import Pagination from "./components/Pagination";
import SearchBox from "./components/searchBox";
import SkeletonCard from "./components/SkeletonCard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      error: null,
      isLoaded: false,
      searchfield: "",
      genderfield: "",
      currentPage: 1,
      cardPerPage: 20,
    };
  }

  componentDidMount() {
    fetch("https://api.enye.tech/v1/challenge/records")
      .then(res => res.json())
      .then(
        result => {
          const timer = setTimeout(() => {
            this.setState({isLoaded: true, profiles: result.records.profiles});
          }, 5000);
          return () => clearTimeout(timer);
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  onSearchChange = e => {
    this.setState({searchfield: e.target.value});
  };

  onGenderChange = e => {
    this.setState({genderfield: e.target.value});
  };

  render() {
    const {
      error,
      isLoaded,
      profiles,
      searchfield,
      genderfield,
      currentPage,
      cardPerPage,
    } = this.state;
    //pagination
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCard = profiles.slice(indexOfFirstCard, indexOfLastCard);
    //change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});

    //search functionality
    let searchRecords = currentCard.filter(
      users =>
        users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
        users.LastName.toLowerCase().includes(searchfield.toLowerCase())
    );

    // gender functionality
    const genderRecords = currentCard.filter(({Gender}) => {
      return Gender.includes(genderfield);
    });

    //
    let displayProfiles = currentCard;
    
    if (genderfield.length) {
      displayProfiles = genderRecords;

      if (searchfield.length >= 1) {
        searchRecords = genderRecords.filter(
          users =>
            users.FirstName.toLowerCase().includes(searchfield.toLowerCase()) ||
            users.LastName.toLowerCase().includes(searchfield.toLowerCase())
        );
      }
    }

    if (searchfield.length >= 1) {
      displayProfiles = searchRecords;
    }

    if (error) {
      return (
        <div className='error'>! Please check your internet connection</div>
      );
    } else if (!isLoaded) {
      return (
        <div style={{textAlign: "center"}}>
          <h3>this project is under construction</h3>
          <SkeletonCard />
        </div>
      );
    } else {
      return (
        <div className='page'>
          <p>this project is under construction...</p>
          <h4>title & light/dark mode</h4>
          <GenderFilter genderChange={this.onGenderChange} />
          <SearchBox searchChange={this.onSearchChange} />
          <Pagination
            cardPerPage={cardPerPage}
            totalCards={profiles.length} //20
            paginate={paginate}
          />
          <CardList profiles={displayProfiles} />
        </div>
      );
    }
  }
}

export default App;
