import React, { version } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Module.css'

export const NodeDetails = ({ node, count, setCount, setTypeDetails }) => {
    const Delete = () => {
        axiosWithAuth()
            .delete(`http://localhost:5001/api/nodes/${node.id}`)
            .then(
                setCount(count + 1),
                setTypeDetails('')
            )
            .catch(err => console.log(err))
    }
    return (
        <div className='module-details'>
            <FontAwesomeIcon icon={faTrash} onClick={Delete} className='trash' />
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