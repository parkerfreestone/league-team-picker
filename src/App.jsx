import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { TeamController } from "./components/TeamController";
import TeamList from "./components/TeamList";

function App() {

  const API_KEY = "RGAPI-349e10bd-341e-4b97-8253-7639106d7cb5";
  const QUERY_URL = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";

  const [summonerName, setSummonerName] = useState("");
  const [summonerBank, setSummonerBank] = useState([])

  const fetchSummonerData = (event) => {

    axios.get(`${QUERY_URL}${summonerName}?api_key=${API_KEY}`)
      .then(res => {
        let newBank = summonerBank.filter(n => n).concat(res.data);
        setSummonerBank(newBank);
        setSummonerName("");
      })
      .catch(err => {
        alert(err?.message === "Network Error"
          ? "Summoner Not Found!"
          : err.message
        );
      })

    event.preventDefault();
  }

  const changeSummonerName = (e) => {
    setSummonerName(e.target.value);
    e.preventDefault();
  }

  return (
    <Container
      fluid="true"
      className="mt-5"
    >
      <Container>
        <Row>
          <Col>
            <h1>League Team Randomizer</h1>
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
          </Col>
        </Row>
        <Row>
          <Col>
            <TeamList
              teamName="Summoner Bank"
              teamList={summonerBank}
            />
          </Col>
        </Row>
      </Container>
      <TeamController summonerBank={summonerBank} />
    </Container>
  );
}

export default App;
