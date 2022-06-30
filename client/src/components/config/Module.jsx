import React from 'react'
import '../../styles/Module.css'

export const Module = ({ module }) => {

    return (
        <div className='module-container'>
            <p>• {module.module}</p>
        </div>
    )
}