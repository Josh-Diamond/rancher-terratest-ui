import React from 'react'
import '../../styles/K8sversion.css'

export const Node = ({ node }) => {

    return (
        <div className='k8s-container'>
            <p>• {node.name}</p>
        </div>
    )
}