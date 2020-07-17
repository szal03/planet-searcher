import React from "react";
import './style/Header.css';

const StartHeader = ()=>{
    return(
        <div className="mainHeader">
            <h1>Start your journey through space</h1>
            <h2>Discover places you have never been before</h2>
        </div>
    )
}


const SearchHeader = (props)=>{
    return(
        <div className="searchHeader">
        <div>
            <h1>Planet Searcher</h1>
        </div>
            <button class="backButton" onClick={props.click}>Back</button>
        </div>
    )
}

const Header = (props)=>{
    const status=props.statusForSearch;
    return(
        <div>
            { status?  <SearchHeader click={props.click}/>: <StartHeader/>}
        </div>
    )
}
export default Header;