import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
        color: '#222831'
    },
    subtitle: {
        fontStyle: 'italic',
        color: '#393e46',
        margin: '0'
    }
};

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={styles.navBar}>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand><h2 style={styles.title}>J.Lloyd Design</h2><h6 style={styles.subtitle}>Luxury Kitchens</h6></Navbar.Brand>
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
                        <LinkContainer to='/Pricing'>
                            <Nav.Link id="navLink">Pricing</Nav.Link>
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