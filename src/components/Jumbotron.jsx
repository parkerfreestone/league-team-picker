import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Jumbotron = ({ heading, description, bgColor, fgColor }) => {
    return (
        <Container
            fluid
            className={`py-5 bg-${bgColor}`}
        >
            <Container
                className={`text-${fgColor}`}
            >
                <Row>
                    <Col>
                        <h1 className="fw-bold">{heading}</h1>
                        <p className="lead">{description}</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Jumbotron;