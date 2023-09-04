import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container"

import data from '../data/products.json'

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        promise.then(data => {
            if (!id) {
                setProducts(data)
            } else {
                const productsFiltered = data.filter((product) => product.category === id)
                setProducts(productsFiltered)
            }
        })
    }, [id]);

    if (!products) return <h1 style={{ textAlign: "center" }}>Loading...</h1>

    return (
        <Container className="mt-3">
            <h2 className="greeting">{props.greeting}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ItemList products={products}></ItemList>
            </div>
        </Container>
    )
};