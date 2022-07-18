import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import GameHighlights from "./GameHighlights";
import GameMeta from "./GameMeta";

const GameSummary = ({ matchData }) => {

    const [releventMatchData, setreleventMatchData] = useState([])

    const teamOneIsWinner = () => {
        return (matchData.info.teams["0"].win
            ? false
            : true
        );
    }

    return (
        <Row>
            <Col>
                <GameMeta
                    gameDurration={matchData.info?.gameDuration}
                    teamOneIsWinner={() => teamOneIsWinner()}
                />
                <GameHighlights />
            </Col>
        </Row>
    );
}

export default GameSummary;