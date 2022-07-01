import React, { version } from 'react'
// import '../../styles/Module.css'

export const VersionDetails = ({ version}) => {

    return (
        <div className='version-container'>
            <p>id: {version.id}</p>
            <p>module: {version.module}</p>
            <p>version: {version.version}</p>
            <p>value: {version.value}</p>
        </div>
    )
}