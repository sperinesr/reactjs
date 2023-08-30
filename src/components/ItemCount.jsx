import { useState } from "react"

const stock = 4;

export const ItemCount = () => {
    const [count,setCount] = useState(0);

    const increaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        };
    };

    const decreaseCount = () => {
        if (count >= 1) {
            setCount((prev) => prev - 1)
        };
    };

    const onAdd = () => {
        alert(count)
    };
    
    return (
        <div className="itemCount">
            <span onClick={decreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={increaseCount}>+</span>
            <button onClick={onAdd}>Agregar Item</button>
        </div>
    )
}