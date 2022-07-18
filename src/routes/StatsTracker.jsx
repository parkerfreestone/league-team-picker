import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

import axios from 'axios';
import GameSummary from "../components/GameSummary";


const StatsTracker = (props) => {

    const [matchData, setMatchData] = useState({})

    const searchTerms = [
        'assists',
        'damageDealtToTurrets',
        'visionScore',
        'kills',
        'goldEarned',
        'largestKillingSpree',
        'totalDamageTaken',
        'totalMinionsKilled'
    ]

    const fetchMostRecentMatch = () => {
        axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/MHJamGcfG7toVk-EEaduU_1Cz2ZkL30RQoxJpIo4CAuwOVj9kVRiERE1z4vGybbTENWH0uxr5Sb7iA/ids?start=0&count=1&api_key=RGAPI-893285f1-44ac-4990-9388-70bd9b175e47`)
            .then(res => {
                axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${res.data[0]}?api_key=RGAPI-893285f1-44ac-4990-9388-70bd9b175e47`)
                    .then(res => {
                        setMatchData(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    const determineRelevantMatchData = () => {

        let highestValue = null;
        let listOfReleventData = [];

        searchTerms.forEach((term, i) => {
            matchData.info.participants.forEach(participant => {
            });
        })
    }

    return (
        <>
            <Jumbotron
                heading="Stats Tracker"
                description="League of Legends Tournaments"
                bgColor="success"
                fgColor="white"
            />
            <Container
                className="mt-5"
            >
                <Button
                    variant="secondary"
                    onClick={() => {
                        fetchMostRecentMatch()
                        determineRelevantMatchData();
                    }
                    }
                >
                    Get match data
                </Button>
                <GameSummary
                    matchData={matchData}
                />
            </Container>
        </>
    );
}

export default StatsTracker;