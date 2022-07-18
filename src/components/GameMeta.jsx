import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";


const GameMeta = ({
    gameDurration,
    teamOneIsWinner,
}) => {

    return (
        <Row
            className="mt-3"
        >
            <Col
                sm={6}
            >
                <ListGroup
                    as="ul"
                >
                    <ListGroup.Item
                        as="li"
                        key="-1"
                        className="bg-dark text-white"
                    >
                        Game Durration
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        key="0"
                    >
                        {Math.floor(gameDurration / 60)} Minutes
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col sm={6}>
                <ListGroup
                    as="ul"
                >
                    <ListGroup.Item
                        as="li"
                        key="-1"
                        className="bg-success text-white"
                    >
                        Winner
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        key="0"
                    >
                        {teamOneIsWinner ? "Team 1" : "Team 2"}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
}

export default GameMeta;