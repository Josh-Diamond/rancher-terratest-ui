import React from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../styles/K8sversion.css'

export const NodepoolDetails = ({ nodepool, count, setCount, setTypeDetails }) => {
    const Delete = () => {
        axiosWithAuth()
            .delete(`http://localhost:5001/api/nodepools/${nodepool.id}`)
            .then(
                setCount(count + 1),
                setTypeDetails('')
            )
            .catch(err => console.log(err))
    }
    return (
        <div className='module-details'>
            <FontAwesomeIcon icon={faTrash} onClick={Delete} className='trash' />
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