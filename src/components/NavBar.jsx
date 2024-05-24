import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../main.css'

const styles = {
    navLink: {
        fontWeight: "700",
        color: "white",
        textDecoration: "none",
        letterSpacing: "2px",
        height: "60px",
    },
    navBar: {
        minHeight: '10vh',
    },
    title: {
        padding: '0',
        margin: '0',
        color: '#45523E'
    },
    subtitle: {
        fontStyle: 'italic',
        color: '#45523E',
        margin: '0'
    }
};

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={styles.navBar} id="navbar-bg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand><h2 style={styles.title}>ForestWood Design</h2><h6 style={styles.subtitle}>Luxury Kitchens - 07555 304240</h6></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/'>
                            <Nav.Link id="navLink">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Kitchens'>
                            <Nav.Link id="navLink">Kitchens</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/Furniture'>
                            <Nav.Link id="navLink">Furniture</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Booking</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Design</NavDropdown.Item>
                            <NavDropdown.Item href="#/Pricing">Pricing</NavDropdown.Item>
                        </NavDropdown>


                        <LinkContainer to='/OurWork'>
                            <Nav.Link id="navLink">Our Work</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/ContactMe'>
                            <Nav.Link id="navLink">Contact Me</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;