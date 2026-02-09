import { useState } from "react";

export function Login(){

    const [isLoggedIn , setLogin] = useState(true);

    return <>
        <div>
            <h2>Login Status</h2>
            {isLoggedIn && <p>You are Loged In</p>}
            <button onClick={() => setLogin(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </div>
    </>
}