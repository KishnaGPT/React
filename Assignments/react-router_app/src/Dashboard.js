import React from 'react'
import {Navigate} from 'react-router-dom';

export function Dashboard({isAuthenticated}){

    if(!isAuthenticated){
        return <Navigate to="/login" replace></Navigate>
    }

    return<>
        <div className='page'>
            <h2>Dashboard</h2>
            <p>This is your personalized dashboard where you can:</p>
            <ul style={{ textAlign: 'left', marginTop: '20px' }}>
                <li>View analytics</li>
                <li>Manage account settings</li>
                <li>Access downloads</li>
                <li>See private content</li>
            </ul>
        </div>
    </>
}
