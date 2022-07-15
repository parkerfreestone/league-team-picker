import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
    return (
        <>
            <Jumbotron
                heading="Custom Game Tracker"
                description="A tool for randomizing team's, and creating tournaments in League of Legends."
                bgColor="danger"
                fgColor="white"
            />
            <Container
                className="mt-5"
            >

                <Row>
                    <Col
                        xl={6}
                        className="mb-3 mb-xl-0"
                    >
                        <Card>
                            <Card.Header
                                as="h2"
                                className="bg-dark text-white fw-bold h4"
                            >
                                Team Randomizer
                            </Card.Header>
                            <Card.Body>
                                <p>Interface directly with the Riot API in order to generate pseudo random teams for your custom games!</p>
                            </Card.Body>
                            <Card.Footer
                                className="bg-white d-flex align-items-center justify-content-end border-0"
                            >
                                <Link
                                    to="/team-randomizer"
                                    className="btn btn-secondary text-decoration-none"
                                >
                                    Try out the Team Randomizer
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col
                        xl={6}
                    >
                        <Card>
                            <Card.Header
                                as="h2"
                                className="bg-dark text-white h4 fw-bold d-flex align-items-center justify-content-between"
                            >
                                Stats Tracker
                                <Badge
                                    pill
                                >
                                    New
                                </Badge>
                            </Card.Header>
                            <Card.Body>
                                <p>This complicated task will take your custom games from
                                    boring to official with Riot's (poorly documented) tournament API!</p>
                            </Card.Body>
                            <Card.Footer
                                className="bg-white d-flex align-items-center justify-content-end border-0"
                            >
                                <Link
                                    to="/stats-tracker"
                                    className="btn btn-secondary text-decoration-none"
                                >
                                    Track Tournament Stats
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;