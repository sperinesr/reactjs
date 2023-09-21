import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProduct = (product, quantity) => {
        const alredyExists = products.some(item => item.id === product.id)

        if (!alredyExists) {
            setProducts(prev => [...prev, { ...product, quantity }])
        } else {
            const updateProducts = products.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                } else return item
            })
            setProducts(updateProducts)
        }
        alert("Product added")
    }


    const totalCart = products.reduce((act, val) => act + val.quantity, 0)

    const removeProduct = (id) => {
        const productsFiltered = products.filter(products => products.id !== id)
        setProducts(productsFiltered)

        alert("Product removed")
    }

    const clear = () => {
        (setProducts([]))
        alert("Cart clear")
    }

    return (
        <CartContext.Provider value={{ addProduct, products, removeProduct, clear, totalCart }}>
            {children}
        </CartContext.Provider>
    )

}