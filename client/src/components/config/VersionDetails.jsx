import React from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import '../../styles/Module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const VersionDetails = ({ version, count, setCount, setTypeDetails }) => {
    const Delete = () => {
        axiosWithAuth()
            .delete(`http://localhost:5001/api/k8s/${version.id}`)
            .then(
                setCount(count + 1),
                setTypeDetails('')
            )
            .catch(err => console.log(err))
    }

    return (
        <div className='module-details'>
            {/* <FontAwesomeIcon icon={faTrash} onClick={Delete} className='trash' /> */}
            <h2 className='spec-title'>KUBERNETES VERSION</h2>
           <div className='spec-wrapper'>
            <div className='spec'>
                <p>module:</p>
                <p className='value'>{version.module}</p>
            </div>
            <div className='spec'>
                <p>version:</p>
                <p className='value'>{version.version}</p>
            </div>
            <div className='spec'>
                <p>value:</p>
                <p className='value'>{version.value}</p>
            </div>
           </div>
        </div>
    )
}