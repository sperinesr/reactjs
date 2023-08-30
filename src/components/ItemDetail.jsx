import Card from 'react-bootstrap/Card';

export const ItemDetail = ({product}) => (
    <Card className="text-center">
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Img className="imgProducts" alt={product.image} src={product.image}></Card.Img>
            <Card.Text>
                {product.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">${product.price}</Card.Footer>
    </Card>
)