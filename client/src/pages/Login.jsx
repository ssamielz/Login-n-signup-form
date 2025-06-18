import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(){

    }

    return <>
        
        <div className="login-form">
            <h1>Login Page</h1>
            <form action="">
            <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/> <br /> <br />
            
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

            <p><Link to='/register'>Don't have an account? Create account</Link></p>
            <p><Link>Forgot password? </Link></p>

            <button type="submit">Login</button>
        </form>
        </div>
    </>
}

export default Login;