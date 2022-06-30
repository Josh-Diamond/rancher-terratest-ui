import React from 'react'
import '../styles/Home.css'
import { Nav } from '../components/nav/Nav'

export const Home = ({setAuth, isOpen, setIsOpen}) => {

    return (
        <div className='home-wrapper'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='home'>
                <h2 className='home-title'>Rancher Terratest</h2>
            </div>
        </div>
    )
}
