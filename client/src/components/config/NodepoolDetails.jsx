import React from 'react'
import '../../styles/K8sversion.css'

export const NodepoolDetails = ({ nodepool }) => {
    return (
        <div className='nodepool-container'>
            <p>id: {nodepool.id}</p>
            <p>name: {nodepool.name}</p>
            <p>func: {nodepool.func}</p>
        </div>
    )
}