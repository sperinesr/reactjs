import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

import { CartWidget } from "./CartWidget";

import { NavLink } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

import { getFirestore, getDocs, collection } from 'firebase/firestore'

export const NavBar = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const refCollection = collection(db, "store");
                const snapshot = await getDocs(refCollection);

                if (snapshot.size === 0) {
                    setProducts([]);
                } else {
                    const productsData = snapshot.docs.map((doc) => {
                        return { category: doc.category, ...doc.data() };
                    });
                    setProducts(productsData);
                }
            } catch (error) {   
                setProducts([]);
            }
        };

        fetchData();
    }, []);

    const categories = [...new Set(products.map((product) => product.category))];

    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark" className="fixed-top" >
                <Container>
                    <Navbar.Brand as={NavLink} to="/">TCGstore</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((category) => (
                                <NavDropdown.Item as={NavLink} to={`/category/${category}`}key={category}>
                                    {category}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
};