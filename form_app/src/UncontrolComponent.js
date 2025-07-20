import { useEffect, useRef} from "react";

export function AvengerUncontrol(){

    const head = {
        backgroundColor: 'Red'
    }

    const headref = useRef(null)

    const focusme = useRef(null);
    let color = ["Red", "Yellow", "Blue", "Pink", "Purple", "Orange", "Green"]
    let current = 0;
    const changeColor = ()=>{
        headref.current.style.backgroundColor = color[current];
        current = (current+1)%color.length;
    }

    const changeColorBlue = ()=>{
        headref.current.style.backgroundColor = 'blue';
    }
    const changeColorPink = ()=>{
        headref.current.style.backgroundColor = 'pink';
    }

    const changeColorIvory = ()=>{
        headref.current.style.backgroundColor = 'ivory';
    }

    const changeColorYellow = ()=>{
        headref.current.style.backgroundColor = 'yellow';
    }

    const changeFocus = ()=>{
        focusme.current.focus()
    }

    useEffect(()=>{
        focusme.current.focus();
    })

    return <>
        <h1 style={head} ref={headref}>Uncontrol Component</h1>
        <button type="button" onClick={changeColor}>Random</button>
        <button type="button" onClick={changeColorBlue}>Blue</button>
        <button type="button" onClick={changeColorPink}>Pink</button>
        <button type="button" onClick={changeColorYellow}>yellow</button>
        <button type="button" onClick={changeColorIvory}>ivory</button>
        

        <br></br>
        <br></br>

        Fname: <input type="text" ref={focusme}></input>
        Lname: <input type="text"></input>
        <button type="button" onClick={changeFocus}>Focus</button>
    </>

}