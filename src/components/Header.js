import React from "react";
import './style/Header.css';

const StartHeader = () => {
    return (
        <div className="mainHeader">
            <h1>Start your journey through space</h1>
            <h2>Discover places you have never been before</h2>
        </div>
    )
}


const SearchHeader = (props) => {
    const searchStatus = props.searchStatus;
    return (
        <div className="searchHeader">
            <div>
                <h1>Planet Searcher</h1>
                {searchStatus ? <div className="failSearchMessage"><h2>there is no search results... </h2></div> : null}
            </div>
            <button className="backButton" onClick={props.click}>Back</button>
        </div>
    )
}

const Header = (props) => {
    const status = props.statusForSearch;
    const searchStatus = props.searchStatus;
    return (
        <div>
            {status ? <SearchHeader click={props.click} searchStatus={searchStatus} /> : <StartHeader />}
        </div>
    )
}
export default Header;