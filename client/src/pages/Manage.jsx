import React from 'react'
import '../styles/Manage.css'
import { Nav } from '../components/nav/Nav'

export const Manage = ({setAuth}) => {

    return (
        <div className='manage-wrapper'>
            <Nav setAuth={setAuth} />
            <div className='manage'>
                <h2 className='manage-title'>Manage Page</h2>
            </div>
        </div>
    )
}