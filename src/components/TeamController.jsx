import React, { useState } from "react";
import { Col, Row, Container, Button, ListGroup } from "react-bootstrap";
import TeamList from "./TeamList";

export const TeamController = ({ summonerBank }) => {

    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([]);

    const randomizeTeams = () => {
        summonerBank.sort(() => Math.random() - 0.5);
        for (let i = 0; i > summonerBank.length; i++) {
            if (!teamOne.length >= Math.floor(summonerBank.length / 2)) {
                let newTeamList = summonerBank.concat(summonerBank[i])
                setTeamOne(newTeamList);
                console.log("Here")
            } else {
                let newTeamList = summonerBank.concat(summonerBank[i])
                setTeamTwo(newTeamList);
                console.log("here")
            }
        }
        console.log(teamOne);
    }

    return (
        <Container className="my-5">
            <Row className="mb-3">
                <Col>
                    <Button
                        variant="primary"
                        onClick={randomizeTeams}
                    >
                        Randomize Teams
                    </Button>
                    <Button
                        className="mx-3"
                        variant="secondary"
                        onClick={randomizeTeams}
                    >
                        Reset
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <TeamList
                        teamName="Team 1"
                        teamList={teamOne}
                    />
                </Col>
                <Col lg={6}>
                    <TeamList
                        teamName="Team 2"
                        teamList={teamTwo}
                    />
                </Col>
            </Row>

        </Container>
    );
}