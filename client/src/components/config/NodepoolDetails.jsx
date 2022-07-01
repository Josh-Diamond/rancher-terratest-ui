import React from 'react'
import '../../styles/K8sversion.css'

export const NodepoolDetails = ({ nodepool }) => {
    return (
        <div className='module-details'>
            <h2 className='spec-title'>NODE POOL</h2>
            <div className='spec'>
                <p>name:</p>
                <p>{nodepool.name}</p>
            </div>
            <div className='spec'>
                <p>func:</p>
                <p>{nodepool.func}</p>
            </div>
        </div>
    )
}