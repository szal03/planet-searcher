import React from "react";
import './style/SearchInput.css'

const Info = () => {
    return (
        <div className="infoInBox"><span>Enter the name of the planet or star you are interested in. As a result, you will receive photos with descriptions.</span></div>
    )
}


const SearchInput = (props) => {
    const showInfo = props.show;
    return (
        <div className="searchInput">
            <input type="text" vaule={props.value} onChange={props.change} />
            <button className="searchButton" onClick={props.submitSearch}>Search</button>
            <div className="infoBox" onMouseEnter={props.showInfo} onMouseLeave={props.hideInfo}>
                <span>info</span>
            </div>
            {showInfo ? <Info /> : null}
        </div>
    )
}

export default SearchInput;
