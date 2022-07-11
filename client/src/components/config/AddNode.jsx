import React, { useState } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import '../../styles/Module.css'

export const AddNode = ({ count, setCount, setTypeDetails }) => {
    const [data, setData] = useState({
        name: '',
        quantity: 1,
        etcd: false,
        cp: false,
        wkr: false
    })

    const AddNode = e => {
        e.preventDefault()

        const nodeData = {
            "name" : data.name,
            "quantity": data.quantity.toString(),
            "etcd" : data.etcd,
            "cp": data.cp,
            "wkr": data.wkr
        }
        console.log('nodeData', nodeData)
        axiosWithAuth()
        .post('http://localhost:5001/api/nodes/', nodeData)
        .then( () => (
            setCount(count + 1),
            setTypeDetails('node_success')
        ))
        .catch(err => (
            console.log(err),
            setTypeDetails('node_error')
        ))
    }

   const HandleChanges = e => {
    let updatedValue = e.currentTarget.value;

    if (updatedValue === "true" || updatedValue == "false") {
        updatedValue = JSON.parse(updatedValue);
    }

    setData({...data, [e.target.name]: updatedValue})
   }

    console.log('data', data)
    return (
        <div className='module-details'>
            <h2 className='spec-title'> ADD NODE</h2>
            <form className='spec-wrapper' onSubmit={AddNode}>
                <label className='spec' htmlFor='name'>Name:
                    <input type='text' name='name' value={data.name} onChange={HandleChanges}  />
                </label>
                <label className='spec' htmlFor='quantity'>Quantity:
                    <input type='number' min='1' name='quantity' value={data.quantity} onChange={HandleChanges}  />
                </label>
                <label className='spec' htmlFor='etcd'>Etcd:
                    <select onChange={HandleChanges} name="etcd">
                        <option ngValue={false}>false</option>
                        <option ngValue={true}>true</option>
                    </select>
                </label>
                <label className='spec' htmlFor='cp'>Cp:
                <select onChange={HandleChanges} name="cp">
                        <option ngValue={false}>false</option>
                        <option ngValue={true}>true</option>
                    </select>
                </label>
                <label className='spec' htmlFor='wkr'>Wkr:
                <select onChange={HandleChanges} name="wkr">
                        <option ngValue={false}>false</option>
                        <option ngValue={true}>true</option>
                    </select>
                </label>
                <button style={{ display: 'none'}} />
            </form>
        </div>
    )
}