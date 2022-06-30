import React from 'react'
import '../styles/Manage.css'
import { Nav } from '../components/nav/Nav'

export const Manage = ({setAuth, isOpen, setIsOpen}) => {

    return (
        <div className='manage-wrapper'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='manage'>
                <h2 className='manage-title'>MANAGE</h2>
                <div className='manage-page'>

                </div>
            </div>
        </div>
    )
}