import React from 'react'
import '../../styles/Module.css'

export const ModuleDetails = ({ module}) => {

    return (
        <div className='module-details'>
            <h2 className='spec-title'>MODULE</h2>
            <div className='spec'>
                <p>module:</p>
                <p>{module.module}</p>
            </div>
            <div className='spec'>
                <p>value:</p>
                <p>{module.value}</p>
            </div>
        </div>
    )
}