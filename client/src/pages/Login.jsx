import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'
import logo from '../static/rancher-cow-logo.png'

export const Login = ({setAuth}) => {
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
                setAuth(true)
                nav("/home")
            })
            .catch(err => console.log(err))
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    return (
       <div className="login-wrapper unselectable">
        <img src="https://releases.rancher.com/dashboard/latest/shell/assets/images/pl/dark/login-landscape.svg" className="hero-image" />
       <div className="left">
            <h2 className="login-title unselectable">Welcome to Rancher Terratest</h2>
            <img src={logo} className="logo-cow unselectable" />
            <form onSubmit={e => login(e)}>
                <input className="password" type='password' placeholder='PASSWORD' value={pass} onChange={e => passHandler(e)} />
            </form>
       </div>
       </div>
    )
}