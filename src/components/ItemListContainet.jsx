import Container from "react-bootstrap/Container"

export const ItemListContainer = (props) => (
    <Container className="mt-3">
        <h2>{props.greeting}</h2>
    </Container>
);