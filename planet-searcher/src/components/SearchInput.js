import React from "react";
import './style/SearchInput.css'


const SearchInput = (props) =>{
    return(
        <div className="searchInput">
            <input type="text" vaule={props.value} onChange={props.change}/>
            <button className="searchButton" onClick={props.submitSearch}>Search</button>
        </div>
    )
}

export default SearchInput;
