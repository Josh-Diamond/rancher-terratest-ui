import React from 'react'
import '../styles/Create.css'
import { Nav } from '../components/nav/Nav'

export const Create = ({setAuth, isOpen, setIsOpen}) => {

    return (
        <div className='create-wrapper'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='create'>
                <h2 className='create-title'>Create Page</h2>
            </div>
        </div>
    )
}