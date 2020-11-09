import React from 'react'
// import { Router, Route } from 'react-router-dom';

export const LoginScreen = ({history}) => {


    const handleLogin = ()=>{
        history.replace('/')
    }
        

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr></hr>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
