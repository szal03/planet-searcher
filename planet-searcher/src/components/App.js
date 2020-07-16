import React from 'react';
import './style/App.css';
import Header from "./Header";
import HeroImg from "./HeroImg";
import SearchInput from "./SearchInput";

class App extends React.Component{

render(){
  return (
      <div className="App">
          <Header/>
          <HeroImg/>
          <SearchInput/>
      </div>
  );
}
}

export default App;
