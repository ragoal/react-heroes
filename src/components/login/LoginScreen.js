import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
// import { Router, Route } from 'react-router-dom';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = ()=>{
        dispatch({
            type: types.login,
            payload:{
                name : 'Fernando'
            }
        })
        history.replace(lastPath)
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
