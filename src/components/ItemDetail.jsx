import Card from 'react-bootstrap/Card';

import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext)
    const onAdd = count => addProduct(product, count)

    return (
        <div className='text-center'>
            <Card style={{ width: '30rem', display: 'inline-block' }}>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Img className="imgProducts" alt={product.image} src={product.image}></Card.Img>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Text className="text-muted">Stock {product.stock}</Card.Text>
                <Card.Text className="text-muted" style={{ fontWeight: "bolder" }}>${product.price} dollars</Card.Text>
                <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
            </Card>
        </div >
    )
}