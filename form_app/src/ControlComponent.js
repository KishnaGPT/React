import { useState } from "react";
export function AvengerControl(){


    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Email, setEmail] = useState('');

    const changeFname = (e)=>{
        
        setFname(e.target.value.toUpperCase());
        console.log(e.target.value);
        
    }

    const changeLname = (e) =>{
        
        setLname(e.target.value.toUpperCase());
        console.log(e.target.value);
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form Submitted");
    }

    const changeEmail = (e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    return <>
        <h1>Form in React</h1>
        <form onSubmit={handleSubmit}>
            First Name: <input type="text" value={Fname} onChange={changeFname}></input><br></br>
            Last Name: <input type="text" value={Lname} onChange={changeLname}></input><br></br>
            Eamil: <input type="email" value={Email} onChange={changeEmail}></input><br></br>

            <input type="submit" value="Submit"></input>
        </form>
    </>
}