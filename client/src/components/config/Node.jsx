import React from 'react'
import '../../styles/K8sversion.css'

export const Node = ({ node, setNodeDetails, setTypeDetails }) => {
    const setDetails = () => {
        setNodeDetails(node)
        setTypeDetails('node')
    }
    return (
        <div className='k8s-container' onClick={() => setDetails()}>
            <p>{node.name}</p>
        </div>
    )
}