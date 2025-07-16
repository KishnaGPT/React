import { useState } from "react"
import "./counter.css"

export function Counter(){

    const [count, setCount] = useState(0)

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
    <div className="main">
        <div className="heading">
            <h1 id="head">Counter</h1>
        </div>
        <div className="operation">
            <h2 className="count">{count}</h2>
            <button type="button" id="inc" onClick={inc}>Increment</button>
            <button type="button" id="res" onClick={res}>Reset</button>
            <button type="button" id="dec" onClick={dec}>Decrement</button>
        </div>
    </div>
    </>
}