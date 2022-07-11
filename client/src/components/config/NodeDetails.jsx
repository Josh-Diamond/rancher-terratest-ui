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
            <h2 className='spec-title'>NODE</h2>
            <div className='spec-icon-wrapper'>
                <div className='spec-wrapper'>
                    <div className='spec'>
                        <p>name:</p>
                        <p className='value'>{node.name}</p>
                    </div>
                    <div className='spec'>
                        <p>quantity:</p>
                        <p className='value'>{node.quantity}</p>
                    </div>
                    <div className='spec'>
                        <p>etcd:</p>
                        <p className='value'>{node.etcd ? 'true' : 'false'}</p>
                    </div>
                    <div className='spec'>
                        <p>cp:</p>
                        <p className='value'>{node.cp ? 'true' : 'false'}</p>
                    </div>
                    <div className='spec'>
                        <p>wkr:</p>
                        <p className='value'>{node.wkr ? 'true' : 'false'}</p>
                    </div>
            </div>
            <FontAwesomeIcon icon={faTrash} onClick={Delete} className='trash' />

            </div>
        </div>
    )
}