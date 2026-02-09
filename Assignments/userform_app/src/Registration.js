import { useState } from "react";
import './registration.css'
export function Registration(){

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("");

    function handleChange(e){

        setFormData({...formData, [e.target.name]: e.target.value});
        setError("");
        setMessage("");
    }


    function handleSubmit(e){

        e.preventDefault();

        if(!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword){
            setError("All fields are required!");
            return;
        }

        if(!formData.email.includes('@')){
            setError("Email is not valid.");
            return;
        }

        if(formData.password !== formData.confirmPassword){
            setError("Password do not match.")
            return;
        }
        
        setMessage("Registration Sucessful!")
    }


    return <>
        <div className="register-container">
            <div className="form-card">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                {message && <p className="success">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input name="firstName" placeholder="First Name" onChange={handleChange} />
                    <input name="lastName" placeholder="Last Name" onChange={handleChange} />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
}