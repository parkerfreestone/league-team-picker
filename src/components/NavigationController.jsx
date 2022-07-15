import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BoomboxFill } from "react-bootstrap-icons";
import { Routes, Link, Route } from "react-router-dom";

// ALL OUR ROUTES
import TeamRandomizer from "../routes/TeamRandomizer";
import StatsTracker from "../routes/StatsTracker";

const NavigationController = () => {
    return (
        <>
            <Navbar
                bg="primary"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand
                        className="d-flex align-items-center"
                        href="#home"
                    >
                        <BoomboxFill className="mx-2" />
                        Custom Game Tracker
                    </Navbar.Brand>
                    <Nav className="me-auto">
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
                </Container>
            </Navbar>
            <Routes>
                <Route
                    path="/team-randomizer"
                    element={<TeamRandomizer />}
                />
                <Route
                    path="/stats-tracker"
                    element={<StatsTracker />}
                />
            </Routes>
        </>
    );
}

export default NavigationController;