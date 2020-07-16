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


const SearchHeader = ()=>{
    return(
        <div className="searchHeader">
            <h1>Planet Searcher</h1>
        </div>
    )
}

const Header = (props)=>{
    const status=props.statusForSearch;
    return(
        <div>
            { status?  <SearchHeader/>: <StartHeader/>}
        </div>
    )
}
export default Header;