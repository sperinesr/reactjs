import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container"

import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "store", id)

        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() })
        }).finally(() => setLoading(false))
    }, [id]);

    if (loading) { return <h1 style={{ textAlign: "center" }}>Loading...</h1> }

    return (
        <Container className="mt-3" style={{ paddingBottom: '5px' }}>
            <h2 style={{ textAlign: "center", color: "floralwhite" }}>Detail</h2>
            <ItemDetail product={product}></ItemDetail>
        </Container>
    );
};