import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const nav = useNavigate()
    const [user, setUser] = useState("admin")
    const [pass, setPass] = useState("")
    const creds = {
        "username": user,
        "password": pass
    }
    useEffect(() => {
    localStorage.removeItem('token')
    },[])

    const login = e => {
        e.preventDefault()
        axios
            .post('http://localhost:5001/api/login', creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                nav("/home")
            })
            .catch(err => console.log(err))
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    return (
       <div>
        <form onSubmit={e => login(e)}>
            <input type='password' placeholder='password' value={pass} onChange={e => passHandler(e)} />
            <button>Submit</button>
        </form>
       </div>
    )
}