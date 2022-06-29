import React from 'react'
import '../styles/Home.css'
import { Nav } from '../components/nav/Nav'

export const Home = ({setAuth}) => {

    return (
        <div className='home-wrapper'>
            <Nav setAuth={setAuth} />
            <div className='home'>
                <h2 className='home-title'>Rancher Terratest</h2>
            </div>
        </div>
    )
}
