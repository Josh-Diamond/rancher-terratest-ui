import React from 'react'
import '../styles/Home.css'
import { Nav } from '../components/nav/Nav'
import gopher from '../static/ranchergopherfinal2.png'
import speechbubble from '../static/sbm.png'
export const Home = ({setAuth, isOpen, setIsOpen}) => {

    return (
        <div className='home-wrapper'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='home'>
                {/* <div className='home-title'>
                <h2 className='welcome'>Welcome to</h2>
                <h2 className='rt'>Rancher Terratest</h2>
                </div> */}
                <img src={speechbubble} className='bubble' />
                <img src={gopher} className='gopher' />
            </div>
        </div>
    )
}
