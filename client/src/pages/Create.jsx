import React from 'react'
import '../styles/Create.css'
import { Nav } from '../components/nav/Nav'

export const Create = ({setAuth}) => {

    return (
        <div className='create-wrapper'>
            <Nav setAuth={setAuth} />
            <div className='create'>
                <h2 className='create-title'>Create Page</h2>
            </div>
        </div>
    )
}