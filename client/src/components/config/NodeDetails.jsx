import React, { version } from 'react'
// import '../../styles/Module.css'

export const NodeDetails = ({ node }) => {

    return (
        <div className='node-container'>
            <p>id: {node.id}</p>
            <p>name: {node.name}</p>
            <p>quantity: {node.quantity}</p>
            <p>etcd: {node.etcd ? 'true' : 'false'}</p>
            <p>cp: {node.cp ? 'true' : 'false'}</p>
            <p>wkr: {node.wkr ? 'true' : 'false'}</p>
        </div>
    )
}