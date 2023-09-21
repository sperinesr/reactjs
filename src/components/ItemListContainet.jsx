import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container"
import Spinner from 'react-bootstrap/Spinner';

import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refCollection = category
            ? query(collection(db, "store"), where("category", "==", category))
            : collection(db, "store")

        getDocs(refCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                return <h1 style={{ textAlign: "center" }}>No results</h1>
            } else {
                setProducts(snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                }))
            }
        }).finally(() => setLoading(false))
    }, [category]);

    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "70px" }}>
                <h1>Loading...</h1>
                <Spinner animation="border" role="status">
                </Spinner>
            </div>
        )
    }

    return (
        <Container className="mt-3" style={{ paddingBottom: '5px' }}>
            <h2 className="greeting" style={{ marginTop: "70px" }}>{props.greeting}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ItemList products={products}></ItemList>
            </div>
        </Container>
    )
};