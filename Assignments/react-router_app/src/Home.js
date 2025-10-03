import React from 'react'
import {Link} from 'react-router-dom'


export function Home(){
    return<>
        <div className='page'>
            <h1>Welcome To Home Page</h1>
            <p>Navigate to other pages:</p>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/dashboard" className='btn'>Dashboard</Link>
        </div>
    </>
}
