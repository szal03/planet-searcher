import React from "react";
import './style/PlanetInfoWindow.css';
import { Row, Container, Col, Modal, Button, ModalHeader } from 'react-bootstrap';

const PlanetInfoWindow = (props) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.modalShow}
            onHide={props.modalHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    More Info
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className="showModal">
                <Row>
                    <Col xs={12}>
                        <h4>{props.info[0].data[0].title}</h4>
                    </Col>
                    <Col xs={6}>
                        <img src={props.info[0].links[0].href} />
                    </Col>
                    <Col xs={6} className="textInModal">
                        <p>
                            {props.info[0].data[0].description}
                        </p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button className="closeBtn" onClick={props.modalHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PlanetInfoWindow;
