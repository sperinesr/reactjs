import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({ product }) => {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Text >Stock: {product.stock}</Card.Text>
            <Card.Img className='imgProducts' variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Subtitle>
                    ${product.price}
                </Card.Subtitle>
                <Card.Footer></Card.Footer>
                <Link to={`/item/${product.id}`}><Button variant="primary">Detalle</Button></Link>

            </Card.Body>
        </Card>
    )
}