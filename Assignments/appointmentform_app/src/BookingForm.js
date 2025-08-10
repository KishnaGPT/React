import { useState } from "react";
import './form.css'
export function BookingFrom(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: ""
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

        if(!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time){
            setError("All fields are required!");
            return;
        }

        if(!formData.email.includes('@')){
            setError("Email is not valid.");
            return;
        }
        
        setMessage("Appointment Booked!")
    }


    return <>
        <div className="register-container">
            <div className="form-card">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                {message && <p className="success">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input name="name" placeholder="Name" onChange={handleChange} />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <input name="phone" type="number" placeholder="Phone" onChange={handleChange} />
                    <input name="date" type="date" onChange={handleChange} />
                    <input name="time" type="time" onChange={handleChange} />
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    </>
}