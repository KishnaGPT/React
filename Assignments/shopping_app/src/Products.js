import { useContext } from "react";
import { CartContext } from "./CartContext";


export function Products(){ 

    const {dispatch} = useContext(CartContext);

    const sampleProduct = { id: 1, name: 'Shoe', price: 100 }


    return <>
        <div className="card">
            <h2>{sampleProduct.name}</h2>
            <p>Price: ₹{sampleProduct.price}</p>
            <button onClick={()=>dispatch({type:'ADD_ITEM', payload: sampleProduct})}>
                Add to Cart
            </button>
        </div>
    </>
}

