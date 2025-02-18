import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import '../sass/_navbar.scss';

//Import icon
import { FaSearch } from "react-icons/fa";

function Navbars() {

    return (
        <Navbar key="sm" expand="sm" className="navbar mb-3">
            <Container fluid>
                <Navbar.Brand href="/" className="icon-brand">WTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar-expand-sm"
                    aria-labelledby="offcanvasNavbarLabel-expand-sm"
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm" className="icon-brand">
                            WTS
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='sideBar-body'>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search your city..."
                                className="me-2 input-search"
                                aria-label="Search"
                            />
                            <button className='btn-search' type='button'><FaSearch size={25} /></button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navbars;