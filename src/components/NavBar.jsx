import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const styles = {
    navLink: {
        fontWeight: "700",
        color: "white",
        textDecoration: "none",
        letterSpacing: "2px",
        height: "60px",
    },
};

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Kitchens'>
                            <Nav.Link>Kitchens</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Furniture'>
                            <Nav.Link>Furniture</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Pricing'>
                            <Nav.Link>Pricing</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/ContactMe'>
                            <Nav.Link>Contact Me</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;