import React, { useState } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import '../../styles/Module.css'

export const AddModule = ({ count, setCount, setTypeDetails}) => {
    const [module, setModule] = useState('')

    const Add = e => {
        e.preventDefault()
        const formData = {
            "module" : module,
            "value" : `var ${module.charAt(0).toUpperCase() + module.slice(1)} = \"${module}\"`
        }

        axiosWithAuth()
            .post('http://localhost:5001/api/modules/', formData)
            .then( res => (
                setCount(count + 1),
                setTypeDetails('module_success')
            ))
            .catch(err => (
                console.log(err),
                setTypeDetails('module_error')
            ))
    }
    const HandleChange = e => {
        setModule(e.target.value)
    }

    return (
        <div className='module-details'>
            <h2 className='spec-title'>MODULE</h2>
            <form onSubmit={Add}>
                <label htmlFor='module'>Module:
                    <input type='text' name='module' value={module} onChange={HandleChange} autoFocus  />
                </label>
            </form>
        </div>
    )
}