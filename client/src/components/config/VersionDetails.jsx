import React, { version } from 'react'
import '../../styles/Module.css'

export const VersionDetails = ({ version}) => {

    return (
        <div className='module-details'>
            <h2 className='spec-title'>KUBERNETES VERSION</h2>
           <div className='spec'>
            <p>module:</p>
            <p>{version.module}</p>
           </div>
           <div className='spec'>
            <p>version:</p>
            <p>{version.version}</p>
           </div>
           <div className='spec'>
            <p>value:</p>
            <p>{version.value}</p>
           </div>
        </div>
    )
}