import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

import { CartWidget } from "./CartWidget";

import { Link } from 'react-router-dom';

export const NavBar = ({ categories }) => (
    <header>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">TCGstore</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/category/men's clothing">men's clothing</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/jewelery">jewelery</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/electronics">electronics</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/category/women's clothing">women's clothing</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </header>
);