import React from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../styles/Module.css'

export const ModuleDetails = ({ module, count, setCount, setTypeDetails}) => {

    const Delete = () => {
        axiosWithAuth()
            .delete(`http://localhost:5001/api/modules/${module.id}`)
            .then(
                setCount(count + 1),
                setTypeDetails('')
            )
            .catch(err => console.log(err))
    }

    return (
            <div className='module-details'>
                {/* <FontAwesomeIcon icon={faTrash} onClick={Delete} className='trash' /> */}
                <h2 className='spec-title'>MODULE</h2>
                <div className='spec-wrapper'>
                    <div className='spec'>
                        <p>module:</p>
                        <p className='value'>{module.module}</p>
                    </div>
                    <div className='spec'>
                        <p>value:</p>
                        <p className='value'>{module.value}</p>
                    </div>
                </div>
            </div>
    )
}