import React from 'react'
import '../../styles/Module.css'

export const ModuleDetails = ({ module}) => {

    return (
        <div className='module-details'>
            <p>id: {module.id}</p>
            <p>module: {module.module}</p>
            <p>value: {module.value}</p>
        </div>
    )
}