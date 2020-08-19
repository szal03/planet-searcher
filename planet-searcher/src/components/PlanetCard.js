import React from "react";
import './style/PlanetCard.css';
import { Row, Container, Col, Modal } from 'react-bootstrap';
import PlanetInfoWindow from "./PlanetInfoWindow";


const PlanetCard = (props) => {
    const planets = props.data.map((item, index) => (

        <Col xs={12} sm={12} md={6} lg={4} xl={4} key={index} onClick={() => props.showInfo(item.data[0].nasa_id)}>
            <div className="planetBox" >
                <div className="planetInBox">
                    {item.links !== undefined ? <div><div className="backgroundImgStyle" style={{ backgroundImage: `url(${item.links[0].href})` }}></div>
                        <div className="titleStyle">{item.data[0].title}</div>
                    </div> : null}
                </div>
            </div>
        </Col>

    ))
    return <>
        <Container>
            {props.showInfoWindow ? <PlanetInfoWindow info={props.searchObject} modalShow={props.showInfoWindow} modalHide={props.hideInfo} /> : null}
            <Row>{planets}</Row>
        </Container></>

}
export default PlanetCard;