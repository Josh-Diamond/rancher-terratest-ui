import React, { useState } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import '../../styles/Module.css'

export const AddPool = ({ nodes, count, setCount, setTypeDetails}) => {
    const [name, setName] = useState('')
    const [nodepoolConfig, setNodepoolConfig] = useState([])

    const Add = e => {
        e.preventDefault()
        const formData = {
            "name" : name,
            "append" : `var ${name.charAt(0).toUpperCase() + name.slice(1)} = \"${name}\"`
        }

        axiosWithAuth()
            .post('http://localhost:5001/api/nodepools/', formData)
            .then( res => (
                setCount(count + 1),
                setTypeDetails('pool_success')
            ))
            .catch(err => (
                console.log(err),
                setTypeDetails('pool_error')
            ))
    }
    const HandleChange = e => {
        setName(e.target.value)
    }

    const HandleChanges = e => {
        setNodepoolConfig([...nodepoolConfig, e.target.value])
    }
    console.log("nodeConfig", nodepoolConfig)
    return (
        <div className='module-details'>
            <h2 className='spec-title'>ADD NODE POOL</h2>
            <form className='spec-wrapper' onSubmit={Add}>
                <label className='spec' htmlFor='name'>Name:
                    <input type='text' name='name' value={name} onChange={HandleChange} autoFocus  />
                </label>
                <label className='spec' htmlFor='nodepools'>Select Node Pools:
                <select onChange={HandleChanges} name="nodepools">
                    {nodes.map(n => <option value={n.name}>{n.name}</option>)}
                </select>
                <select onChange={HandleChanges} name="nodepools">
                    {nodes.map(n => <option value={n.name}>{n.name}</option>)}
                </select>
                <select onChange={HandleChanges} name="nodepools">
                    {nodes.map(n => <option value={n.name}>{n.name}</option>)}
                </select>
                    {/* <input type='text' name='module' value={data.module} onChange={e => setData({...data, module: e.target.value})}  /> */}
                </label>
            </form>
        </div>
    )
}