import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { CreateAccount } from '../CreateAccount/CreateAccount';
import './Header.css';
import hIcon from '../../../images/icons/header1.png';
import hIcon2 from '../../../images/icons/header2.png';
import hIcon3 from '../../../images/icons/header3.png';

const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <header>
            <Navbar className="nav-menu d-none d-sm-none d-md-block d-lg-block d-xl-block" sticky="top" collapseOnSelect expand="lg">
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
                            <button className="fw-bold text-dark fs-6 btn bg-white" onClick={() => setModalShow(true)}>
                                Create Account. <span className="free-text  dropdown-toggle">It's free!</span>
                            </button>
                            <CreateAccount
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container phone-header text-end d-block d-sm-block d-md-none d-lg-none d-xl-none py-2">
                <img style={{ height: '15px', marginLeft: '15px' }} src={hIcon} alt="" />
                <img style={{ height: '15px', marginLeft: '15px' }} src={hIcon2} alt="" />
                <img style={{ height: '15px', marginLeft: '15px' }} src={hIcon3} alt="" />
            </div>
        </header>
    );
};

export default Header;