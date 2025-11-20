import { useContext } from "react";
import { CartContext } from "./CartContext";


export function Cart(){

    const {cart, dispatch} = useContext(CartContext);

    return<>
        <div className="card">
            <h3>Shopping Cart</h3>
            {cart.length===0 && <p>Cart is Empty</p>}
            {cart.map(item =>(
                <div key={item.id} className="item">
                    <p>{item.name} - Qty: {item.quantity}</p>
                    <p>Total Price - ₹{item.price*item.quantity}</p>
                    <button onClick={()=> dispatch({type: 'REMOVE_ITEM', payload: item.id})}>Remove</button>
                    <button onClick={()=> dispatch({type: 'ADD_ITEM', payload: {id: item.id, quantity: item.quantity+1}})}>+</button>
                    <button onClick={()=> dispatch({type: 'UPDATE_ITEM', payload: {id: item.id, quantity: item.quantity-1}})} disabled={item.quantity ===1}>-</button>
                </div>
            ))}
        </div>
    </>
}