import React from "react";
import { Container, Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

import axios from 'axios';

const StatsTracker = (props) => {

    const PROVIDER_QUERY_URL = "https://americas.api.riotgames.com/lol/tournament-stub/v4/providers"
    const API_KEY = "RGAPI-46e54044-fa90-488a-90ff-4a5dfc442a50";

    const fetchProviderID = () => {
        axios.post(`${PROVIDER_QUERY_URL}?api_key=${API_KEY}`,
            {
                region: 'NA',
                url: 'http://www.parkerfreestone.com',
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Jumbotron
                heading="Stats Tracker"
                description="League of Legends Tournaments"
                bgColor="danger"
                fgColor="white"
            />
            <Container
                className="mt-5"
            >
                <Button variant="primary" children="get provider id" onClick={fetchProviderID} />
            </Container>
        </>
    );
}

export default StatsTracker;