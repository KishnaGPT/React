// import { useState } from "react";

// export function MultipleAvengerControl(){


//     const [formData, setformData] = useState({fname:'',lname:'',address:'',email:'',password:''});

//     const changeData = (e)=>{
//         console.log(e.target.value);
//         setformData({...formData,[e.target.name]:e.target.value});
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log("Form Submitted Sucessfully");
//     }

//     return<>
//         <h1>Form in React</h1>
//         <form onSubmit={handleSubmit}>
//             First Name: <input type="text" value={formData.fname} onChange={changeData} name="fname"></input><br></br>
//             Last Name: <input type="text" value={formData.lname} onChange={changeData} name="lname"></input><br></br>
//             Address: <input type="text" value={formData.address} onChange={changeData} name="address"></input><br></br>
//             Email: <input type="text" value={formData.email} onChange={changeData} name="email"></input><br></br>
//             Password: <input type="password" value={formData.password} onChange={changeData} name="password"></input><br></br>
//             <input type="submit"></input>
//         </form>
//     </>

// }



import { useState } from "react";

export function MultipleAvengerControl(){

    const container = {
        padding : '30px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '30px auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 10px',
    }
    
    const fieldStyle = {
        padding: "10px",
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
    }

    const button = {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '15px',
        backgroundColor: 'ivory',
        fontSize: '16px'

    }
    const head = {
        textAlign: 'center'
    }


    const [formData, setFormData] = useState({fname:'',lname:'',email:'',address:'',contact:''})

    const setData = (e)=>{

        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const submit= (e)=>{

        // e.preventDefault();

        console.log("form Submitted");
        setFormData({...formData,[e.target.value]:''});

    }

    return <>
        <h1 style={head}>Web Form</h1>
        <div >
        <form style={container} onSubmit={submit}>
        First Name: <input type="text" style={fieldStyle} value={formData.fname} onChange={setData} name="fname"></input>
        Last Name: <input type="text" style={fieldStyle} value={formData.lname} onChange={setData} name="lname"></input>
        Email: <input type="email" style={fieldStyle} value={formData.email} onChange={setData} name="email"></input>
        Address: <input type="text" style={fieldStyle} value={formData.address} onChange={setData} name="address"></input>
        Contact: <input type="number" style={fieldStyle} value={formData.contact} name="contact" onChange={setData}></input>

        <input type="submit" style={button}></input>
        </form>
        </div>
    </>
}