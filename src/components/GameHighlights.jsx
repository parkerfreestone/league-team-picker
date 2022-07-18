import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

const GameHighlights = ({ relevantMatchData }) => {

    const determineHigherScore = (score1, score2) => {
        return (score1 > score2
            ? true
            : false
        );
    }

    return (
        <ListGroup
            className="mt-3"
            as="ul"
        >
            <ListGroup.Item
                as="li"
                key={-1}
                className="bg-success text-white"
            >
                Game Highlights
            </ListGroup.Item>
        </ListGroup>
    );
}

export default GameHighlights;