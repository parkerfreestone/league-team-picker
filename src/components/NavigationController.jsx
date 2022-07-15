import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BoomboxFill } from "react-bootstrap-icons";
import { Routes, Link, Route, Navigate } from "react-router-dom";

// ALL OUR ROUTES
import TeamRandomizer from "../routes/TeamRandomizer";
import StatsTracker from "../routes/StatsTracker";
import Home from "../routes/Home";

const NavigationController = () => {
    return (
        <>
            <Navbar
                expand="lg"
                bg="primary"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand>
                        <Link
                            to="/"
                            className="navbar-brand"
                        >
                            <BoomboxFill className="mx-2" />
                            Custom Game Tracker
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link
                                    to="/"
                                    className="nav-link"
                                >
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/team-randomizer"
                                    className="nav-link"
                                >
                                    Team Randomizer
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link
                                    to="/stats-tracker"
                                    className="nav-link"
                                >
                                    Stats Tracker
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    exact path="/"
                    element={<Home />}
                />
                <Route
                    path="/team-randomizer"
                    element={<TeamRandomizer />}
                />
                <Route
                    path="/stats-tracker"
                    element={<StatsTracker />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" repalce />}
                />
            </Routes>
        </>
    );
}

export default NavigationController;