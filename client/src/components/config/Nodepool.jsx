import React from 'react'
import '../../styles/K8sversion.css'

export const Nodepool = ({ nodepool, setNodepoolDetails, setTypeDetails }) => {
    const setDetails = () => {
        setNodepoolDetails(nodepool)
        setTypeDetails('nodepool')
    }
    return (
        <div className='k8s-container' onClick={() => setDetails()}>
            <p>{nodepool.name}</p>
        </div>
    )
}