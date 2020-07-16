import React from 'react';
import './style/App.css';
import Header from "./Header";
import HeroImg from "./HeroImg";
import SearchInput from "./SearchInput";
import PlanetCard from "./PlanetCard";

const API = 'https://images-api.nasa.gov/search';
class App extends React.Component{

    state={
        inputValue: ""

    }

    handleSearchInput=(e)=>{
        this.setState({
            inputValue: e.target.value,
            searchValue:[],
            statusSearch:false,
        })
    }
    handleSumbmitValue=()=>{
     if(this.state.inputValue===""){
         return alert("need to write something")
     }
     console.log(this.state.inputValue);
     const query = `${API}?q=${this.state.inputValue}`;
        fetch(query).then(response=>{
            if(response.ok){
                console.log(response);
                return response
            }
            throw Error(response.status)
        }).then(response => response.json())
            .then(data => {console.log(data.collection.items)
            this.setState({
                searchValue: data.collection.items,
                statusSearch: true,
            })})
            .catch(error=>console.log(error))
    }

render(){
        const searchActive = this.state.statusSearch;
  return (
      <div className="App">
          <Header statusForSearch={this.state.statusSearch}/>
          <HeroImg/>
          <SearchInput
              value={this.state.inputValue}
              change={this.handleSearchInput}
              submitSearch={this.handleSumbmitValue}/>
              <div className="contentContainer">
                  <div className="cardsContainer">
                      {searchActive? <PlanetCard data={this.state.searchValue}/> : null}
                  </div>
              </div>

      </div>
  );
}
}

export default App;
