import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import TeamController from "../components/TeamController";
import TeamList from "../components/TeamList";
import Jumbotron from "../components/Jumbotron";
import SummonerForm from "../components/SummonerForm";

const TeamRandomizer = () => {

    const [summonerBank, setSummonerBank] = useState([]);

    // LIST HANDLERS
    const isInList = (value) => summonerBank.includes(value) ? false : true;

    const clearSummonerBank = () => setSummonerBank([]);

    const removeSummoner = (summonerName) => {
        let filteredList = summonerBank.filter(summoner => {
            return summoner.name === summonerName
        });
        setSummonerBank(filteredList);
        console.log(summonerBank);
    }

    const resetSummonerBank = (list1, list2) => {
        if (list1.length > 0 && list2.length > 0)
            setSummonerBank([...list1, ...list2]);
        else
            alert('hmmm.. no one to reset?');
    };

    return (
        <>
            <Jumbotron
                heading="Team Randomizer"
                description="League of Legends"
                bgColor="secondary"
                fgColor="white"
            />
            <Container
                className="mt-5"
            >
                <Row>
                    <Col>
                        <SummonerForm
                            summonerBank={summonerBank}
                            setSummonerBank={setSummonerBank}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TeamList
                            teamName="Summoner Bank"
                            teamList={summonerBank}
                            theme="dark"
                            removeSummoner={removeSummoner}
                        />
                    </Col>
                </Row>
            </Container>
            <TeamController
                summonerBank={summonerBank}
                clearBank={clearSummonerBank}
                resetBank={resetSummonerBank}
                removeSummoner={removeSummoner}
            />
        </>
    );
}

export default TeamRandomizer;