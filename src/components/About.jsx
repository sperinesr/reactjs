import { Container } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

export const About = () => {
    return (
        <Container style={{ marginTop: "70px" }}>
            <Card style={{ width: '100%', textAlign: "center", backgroundColor:"lightyellow" }}>
                <Card.Body>
                    <Card.Title style={{ marginBottom: "40px", fontSize:"30px" }}>About this site</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Who I am??</Card.Subtitle>
                    <Card.Text >
                        I am a store of many products of the world, please enjoy and take a look.
                    </Card.Text>
                    <Card.Img style={{ marginTop:"25px" ,width: "40%", height: "40%", borderRadius: "100%", borderColor: "black", borderStyle: "solid" }} src="https://f8n-production.s3.amazonaws.com/creators/profile/lwzizzmli-screenshot-2022-02-05-at-01-06-26-png-1n4ou3.png" alt="Cat picture">
                    </Card.Img>
                </Card.Body>
            </Card>
        </Container>
    )
}