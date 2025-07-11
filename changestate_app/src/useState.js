import { useState } from "react";

export function AvengerUSeState(){
    const[name,setName]=useState("Steve Roger");
    const[heroicName, setHeroicName]=useState("Captain");

    const changeName = ()=>{
        setName("Tony Strak");
        setHeroicName("IronMan");
    }

    const preName = ()=>{
        setName("Steve Roger");
        setHeroicName("Captain");
    }
    return <>
        <h1>I am {name} and my heroic name is <q>{heroicName}</q></h1>
        <button type="Submit" onClick={changeName}>Change Name</button>
        <button type="Submit" onClick={preName}>Undo</button>
    </>
}