import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Alert } from "react-bootstrap";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";

const Home = () => {

    const [showAlert, setShowAlert] = useState(true);

    return (
        <>
            <Alert
                className="mb-0"
                variant="warning"
                onClose={() => showAlert(false)}
                dismissable
            >
                <Container
                    className="d-flex align-items-center"
                >
                    <ExclamationTriangleFill
                        className="me-3"
                        size={30}
                    />
                    This site is still heavily in development, as such do not expect anything
                    to work! (Especially the stat tracker.)
                </Container>
            </Alert>

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
                                    bg="warning"
                                    className="text-black"
                                >
                                    In Development
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