import React, { version } from 'react'
// import '../../styles/Module.css'

export const NodeDetails = ({ node }) => {

    return (
        <div className='module-details'>
            <h2 className='spec-title'>NODE</h2>
            <div className='spec'>
                <p>name:</p>
                <p>{node.name}</p>
            </div>
            <div className='spec'>
                <p>quantity:</p>
                <p>{node.quantity}</p>
            </div>
            <div className='spec'>
                <p>etcd:</p>
                <p>{node.etcd ? 'true' : 'false'}</p>
            </div>
            <div className='spec'>
                <p>cp:</p>
                <p>{node.cp ? 'true' : 'false'}</p>
            </div>
            <div className='spec'>
                <p>wkr:</p>
                <p>{node.wkr ? 'true' : 'false'}</p>
            </div>
        </div>
    )
}