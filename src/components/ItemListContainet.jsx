import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container"

import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refCollection = id
            ? query(collection(db, "store"), where("category", "==", id))
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
    }, [id]);

    if (loading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>

    return (
        <Container className="mt-3" style={{ paddingBottom: '5px' }}>
            <h2 className="greeting">{props.greeting}</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ItemList products={products}></ItemList>
            </div>
        </Container>
    )
};