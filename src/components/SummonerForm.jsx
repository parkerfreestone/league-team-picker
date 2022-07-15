import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from 'axios';

const SummonerForm = ({ summonerBank, setSummonerBank }) => {

    const API_KEY = "RGAPI-46e54044-fa90-488a-90ff-4a5dfc442a50";
    const QUERY_URL = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

    const [summonerName, setSummonerName] = useState("");

    const fetchSummonerData = (event) => {
        event.preventDefault();

        axios.get(`${QUERY_URL}${summonerName}?api_key=${API_KEY}`)
            .then(res => {
                let newBank = summonerBank.filter(n => n).concat(res.data);
                setSummonerBank(newBank);
                setSummonerName("");
            })
            .catch(err => {
                alert(err?.message === "Network Error"
                    ? `Summoner: ${summonerName}, not Found...`
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