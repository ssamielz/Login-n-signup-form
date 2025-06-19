import React from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()

        
            fetch(`http://localhost:5555/admins/${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'password': password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setEmail('')
                setPassword('')
                alert('You have successfully logged in')
                navigate('/home')
            })
            .catch(err => console.error(err))
        
    }

    return <>
        
        <div className="login-form">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/> <br /> <br />
            
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

            <p><Link to='/register'>Don't have an account? Create account</Link></p>
            <p><Link>Forgot password? </Link></p>

            <button type="submit">Login</button>
        </form>
        </div>
    </>
}

export default Login;