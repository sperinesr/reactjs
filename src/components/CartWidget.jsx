import { useContext } from 'react';

import { Link } from 'react-router-dom';

import cartImage from '../assets/carrito.png';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const {totalCart} = useContext(CartContext)

    return (
        <Link style={{textDecorationLine:'none'}} to="/cart">
            <img src={cartImage} alt="cart" /> <span>{totalCart}</span>
        </Link>
    )
};