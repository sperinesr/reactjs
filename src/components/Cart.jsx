import { Container, Table, Button, Form } from "react-bootstrap"

import { useState } from "react";

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import { Link } from "react-router-dom";

import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Cart = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const { products, removeProduct, clear } = useContext(CartContext)

    const total = () => {
        return (
            products.reduce((act, val) => act + val.quantity * val.price, 0)
        )
    }

    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev, [ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {

        if (formValues.name === "" || formValues.phone === "" || formValues.email === "") {
            alert("Please fill out all the fields before placing the order");
            return;
        }

        const order = {
            buyer: formValues,
            products,
            total: total(),
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Your order " + id + " has been added")
                setFormValues({
                    name: "",
                    phone: "",
                    email: ""
                })
                clear();
            }
        })
    }

    return (
        <Container className="mt-3" style={{ textAlign: "center", marginTop: "70px" }}>
            {products.length === 0 ? (
                <>
                    <h2 className="greeting" style={{ marginTop: "70px" }}>No products added</h2>
                    <Link to="/">
                        <Button style={{ margin: "15px" }}>
                            Return
                        </Button>
                    </Link>
                </>
            ) : (
                <>
                    <h2 className="greeting" style={{ marginTop: "70px" }}>Cart</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(products => {
                                return (
                                    <tr key={products.id}>
                                        <td style={{ textAlign: "center" }}>{products.id}</td>
                                        <td style={{ textAlign: "center" }}><img src={products.image} alt={products.image}></img></td>
                                        <td style={{ textAlign: "center" }}>{products.title}</td>
                                        <td style={{ textAlign: "center" }}>${products.price}</td>
                                        <td style={{ textAlign: "center" }}>{products.quantity}</td>
                                        <td style={{ textAlign: "center" }}><Button onClick={() => { removeProduct(products.id) }}>Remove</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td style={{ textAlign: "right", fontWeight: "bold" }}>Total</td>
                                <td style={{ fontWeight: "bold", textAlign: "center" }}>${total()}</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </Table>
                    <Button style={{ margin: "15px" }} onClick={() => { clear() }}>Clear Cart</Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} value={formValues.name} required />
                            <Form.Text className="text-muted">
                                Tell us whats your name.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="number" placeholder="Enter phone number" name="phone" onChange={handleChange} value={formValues.phone} required />
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} value={formValues.email} required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button style={{ margin: "15px" }} onClick={() => { sendOrder() }}>
                            Buy
                        </Button>
                    </Form>
                </>
            )}
        </Container>
    )
}