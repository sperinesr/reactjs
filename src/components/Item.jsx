import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({ product }) => {
    return (
        <Card style={{ width: '22rem' }}>

            <Card.Img className='imgProducts' variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Card.Subtitle>
                    ${product.price} dollars
                </Card.Subtitle>
                <Link to={`/item/${product.id}`}><Button variant="primary">Detalle</Button></Link>

            </Card.Body>
        </Card>
    )
}