import React from 'react'
import '../../styles/Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faFolderOpen, faGears, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


export const Nav = ({setAuth}) => {

    const Logout = () => {
        const nav = useNavigate()
        localStorage.removeItem("token")
        setAuth(false)
        nav("/")
    }

    return (
        <div className='nav'>
            <h1 className='nav-title'> Rancher • Terratest</h1>
            <div className='links'>
            <div className='config-nav'>
                    <FontAwesomeIcon icon={faGears} />
                    <Link to="/config" className='config-link'>Config.go</Link>
                </div>
                <div className='create-nav'>
                    <FontAwesomeIcon icon={faFilePen} />
                    <Link to="/create" className='create-link'>CREATE</Link>
                </div>
                <div className='manage-nav'>
                <FontAwesomeIcon icon={faFolderOpen} />
                    <Link to="/manage" className='manage-link'>MANAGE</Link>
                </div>
                <div onClick={() => Logout()} className='logout-nav'>
                <FontAwesomeIcon icon={faRightFromBracket} />
                    <Link to="/" className='logout-link'>LOGOUT</Link>
                </div>
            </div>

        </div>
    )
}
