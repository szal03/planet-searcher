import React from "react";
import './style/PlanetCard.css'



const PlanetCard =(props)=>{
    const p = props.data;
    const planets = p.map(planet => (
        <div className="planetBox" >
            <div key={planet.data[0].nasa_id} className="planetInBox">
                <div className="backgroundImgStyle" style={{ backgroundImage: `url(${planet.links[0].href})`} }></div>
                <div className="titleStyle">{planet.data[0].title}</div>
            </div>
        </div>

    ))
    return planets

}
export default PlanetCard;