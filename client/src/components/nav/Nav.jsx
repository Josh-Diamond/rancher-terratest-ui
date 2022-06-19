import React from 'react'
import '../../styles/Nav.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faFolderOpen } from '@fortawesome/free-solid-svg-icons'


export const Nav = () => {
    return (
        <div className='nav'>
            <h1 className='nav-title'> Rancher • Terratest</h1>
            <div className='links'>
                <div className='create-nav'>
                    <FontAwesomeIcon icon={faFilePen} />
                    <Link to="/create" className='create-link'>CREATE</Link>
                </div>
                <div className='manage-nav'>
                <FontAwesomeIcon icon={faFolderOpen} />
                    <Link to="/manage" className='manage-link'>MANAGE</Link>
                </div>
            </div>

        </div>
    )
}