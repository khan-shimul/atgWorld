import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <Navbar className="nav-menu" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to='/'>
                        <img
                            alt=""
                            src={logo}

                            className="d-inline-block align-top"
                        />{' '}

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Form className="search-field">
                                <FormControl
                                    type="search"
                                    placeholder="Search for your favorite group in ATG"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </Nav>
                        <Nav>

                            <Nav.Link >Create Account. Its Free</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;