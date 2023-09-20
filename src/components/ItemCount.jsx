import { useState } from "react"
import { Button } from "react-bootstrap";

export const ItemCount = ({onAdd, stock}) => {
    const [count,setCount] = useState(1);

    const increaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        };
    };

    const decreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        };
    };

    return (
        <div className="itemCount">
            <Button onClick={decreaseCount}>-</Button>
            <span>{count}</span>
            <Button onClick={increaseCount}>+</Button>
            <Button onClick={()=> onAdd(count)} style={{marginLeft : '15px'}}>Add Product</Button>
        </div>
    )
}