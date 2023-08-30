import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container"

import data from '../data/products.json'

import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id === Number(id))
                resolve(productById)
            }, 2000);
        });
        promise.then((data) => setProduct(data))
    },);

    if (!product) return <h1 style={{ textAlign: "center" }}>Loading...</h1>

    return (
        <Container className="mt-3">
            <h2 style={{ textAlign: "center", color : "floralwhite" }}>Detalles</h2>
            <ItemDetail product={product}></ItemDetail>
        </Container>
    );
};