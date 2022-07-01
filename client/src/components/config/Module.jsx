import React from 'react'
import '../../styles/Module.css'

export const Module = ({ module, setModuleDetails, setTypeDetails }) => {

    const setDetails = () => {
        setModuleDetails(module)
        setTypeDetails('module')
    }
    return (
        <div className='module-container' onClick={() => setDetails()}>
            <p>{module.module}</p>
        </div>
    )
}