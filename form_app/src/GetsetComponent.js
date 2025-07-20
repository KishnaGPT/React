import { useRef } from "react";

export function GetSet(){
    const headref = useRef(null)

    const Setname = ()=>{
        headref.current.value="krishna"
    }

    

    const Getname = ()=>{
        alert(headref.current.value)
    }

    let names = ["Krishna", "Sam", "Prasad", "Swapnil", "Moin", "Divya", "Minal", "Khushi", "Pratik", "Manoj", "Mayuri", "Aishley"];

    let current = 0;

    const Changename = ()=>{
        headref.current.value=names[current];
        current = (current+1) % names.length;
    }



    return <>
        Name: <input type="text" ref={headref}></input>
        <button type="button" onClick={Setname}>SetName</button>
        <button type="button" onClick={Getname}>GetName</button>
        <button type="button" onClick={Changename}>ChangeName</button>
        
    </>
}