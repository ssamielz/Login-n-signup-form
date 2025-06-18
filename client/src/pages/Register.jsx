import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Register(){
    const  [firstName, setFirstName] = useState('')
    const  [lastName, setLastName] = useState('')
    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')
    const  [confirmPassword, setConfirmPassword] = useState('')
    const [role, setRole] = useState('user')

    function handleSubmit(event){
        event.preventDefault()
        useEffect((
            fetch(`http://127.0.0.1:5555/${role}s`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'first_name': firstName,
                    'last_name': lastName,
                    'email': email,
                    'password': password
                })
            }
            )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                if(data){
                    alert(data.message)
                }
            })
            .catch(err => console.error(err))
        ), [])
    }
    return <>

         <div className="login-form">
            <h1>Register Page</h1>
            <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/> <br /> <br />

            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} /> <br /> <br />

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
            
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br /> <br />

            <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> <br /> <br />

            < select value={role} onChange={(e) => setRole(e.target.value)} >
                <option value="">Select your key role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option> 
                
                </select>

            <p><Link to='/login'>Already have an account? Log in</Link></p>
            

            <button type="submit">Register</button>
        </form>
        </div>
    </>
}

export default Register;