import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from 'axios';

const SummonerForm = ({ summonerBank, setSummonerBank }) => {

    const API_KEY = "RGAPI-893285f1-44ac-4990-9388-70bd9b175e47";
    const QUERY_URL = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

    const [summonerName, setSummonerName] = useState("");

    const fetchSummonerData = (event) => {
        event.preventDefault();

        axios.get(`${QUERY_URL}${summonerName}?api_key=${API_KEY}`)
            .then(res => {
                let newBank = summonerBank.filter(n => n).concat(res.data);
                setSummonerBank(newBank);
                setSummonerName("");
                console.log(res.data)
            })
            .catch(err => {
                alert(err?.message === "Network Error"
                    ? `Summoner: ${summonerName}, not Found...
                    \n\nOr API key is out of date. Contact 
                    Mr Gandolfio#6551 for support!`
                    : err.message
                );
            })
    }

    const changeSummonerName = (e) => {
        setSummonerName(e.target.value);
        e.preventDefault();
    }

    return (
        <Form onSubmit={fetchSummonerData}>
            <Form.Group
                className="mb-3"
                controlId="summonerName"
            >
                <Row>
                    <Col lg={10}>
                        <Form.Label hidden>
                            Summoner Name:
                        </Form.Label>
                        <Form.Control
                            type="text"
                            className="mt-3"
                            placeholder="Summoner Name..."
                            value={summonerName}
                            onChange={changeSummonerName}
                        />
                    </Col>
                    <Col
                        lg={2}
                        className="d-grid"
                    >
                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-3 btn-block"
                            disabled={
                                !summonerName
                                    ? true
                                    : false
                            }
                        >
                            Add To List
                        </Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    );
}

export default SummonerForm;