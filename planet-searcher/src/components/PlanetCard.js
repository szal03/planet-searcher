import React from "react";
import './style/PlanetCard.css';
import { Row, Container, Col } from 'react-bootstrap';



const PlanetCard = (props) => {
    const planets = props.data.map((item, index) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="planetBox" >
                <div key={index} className="planetInBox">
                    {item.links !== undefined ? <div><div className="backgroundImgStyle" style={{ backgroundImage: `url(${item.links[0].href})` }}></div>
                        <div className="titleStyle">{item.data[0].title}</div>
                    </div> : null}
                </div>
            </div>
        </Col>




    ))
    return <Container><Row>{planets}</Row></Container>

}
export default PlanetCard;