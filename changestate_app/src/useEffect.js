import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0);

    const inc = ()=>{
        setCount(count+1);
    }

    const res = ()=>{
        setCount(0);
    }

    const dec = ()=>{
        setCount(count-1);
    }

    return <>
        <h1>Count: {count}</h1>
        <button type="submit" onClick={inc}>Increment</button>
        <button type="submit" onClick={res}>Reset</button>
        <button type="submit" onClick={dec}>Decrement</button>
    </>
}