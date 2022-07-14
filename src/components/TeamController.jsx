import React, { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import TeamList from "./TeamList";
import { Shuffle, ArrowBarUp, Trash } from "react-bootstrap-icons";

export const TeamController = ({
    summonerBank,
    clearBank,
    resetBank,
}) => {

    const [teamOne, setTeamOne] = useState([]);
    const [teamTwo, setTeamTwo] = useState([]);

    const randomizeTeams = () => {

        let newTeamOne = [];
        let newTeamTwo = [];

        if (summonerBank.length >= 2) {
            summonerBank.sort(() => Math.random() - 0.5);
            summonerBank.forEach((summoner, index) => {
                if (index % 2 === 0) {
                    newTeamOne.push(summoner);
                } else {
                    newTeamTwo.push(summoner);
                }
            });
            setTeamOne(newTeamOne);
            setTeamTwo(newTeamTwo);
            clearBank();
        } else {
            alert('You need at least 2 summoners!');
        }
    }

    const clearTeams = () => {
        setTeamOne([]);
        setTeamTwo([]);
    }

    const resetBankAndClearTeams = () => {
        resetBank(teamOne, teamTwo);
        clearTeams();
    }

    return (
        <Container className="my-5">
            <Row className="mb-3">
                <Col>
                    <Button
                        variant="primary"
                        onClick={randomizeTeams}
                    >
                        <Shuffle className="mx-1" />
                        Randomize Teams
                    </Button>
                    <Button
                        className="mx-3"
                        variant="warning"
                        onClick={resetBankAndClearTeams}
                    >
                        <ArrowBarUp className="mx-1" />
                        Reset
                    </Button>
                    <Button
                        variant="danger"
                        onClick={clearTeams}
                    >
                        <Trash className="mx-1" />
                        Clear All
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <TeamList
                        teamName="Team 1"
                        teamList={teamOne}
                        theme="secondary"
                    />
                </Col>
                <Col lg={6}>
                    <TeamList
                        teamName="Team 2"
                        teamList={teamTwo}
                        theme="secondary"
                    />
                </Col>
            </Row>

        </Container >
    );
}