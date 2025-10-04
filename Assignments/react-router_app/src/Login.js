import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export function Login({setIsAuthenticated}){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleLogin(){
        if(username && password){
            setIsAuthenticated(true);
            navigate('/dashboard');
        }
        else{
            alert('Please Enter Both Fields!');
        }
    }

    return<>
        <div className="page">
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={handleLogin} className="btn">Login</button>
        </div>
    </>
}