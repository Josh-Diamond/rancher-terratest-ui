import React, { useState } from 'react'
import axiosWithAuth from '../auth/axiosWithAuth'
import '../../styles/Module.css'

export const AddVersion = ({ modules, count, setCount, setTypeDetails}) => {
    const [data, setData] = useState({
        module: modules[0].module,
        version: ''
    })

    const AddAks = e => {
        e.preventDefault()

        const aksData = {
            "module" : data.module,
            "version": data.version,
            "value" : `var ${data.module.toUpperCase() + "K8sVersion" + data.version.replaceAll('.', '')} = \"${data.version}\"`
        }
        
        axiosWithAuth()
        .post('http://localhost:5001/api/k8s/', aksData)
        .then( () => (
            setCount(count + 1),
            setTypeDetails('version_success')
        ))
        .catch(err => (
            console.log(err),
            setTypeDetails('version_error')
        ))
    }

    const AddK3s = e => {
        e.preventDefault()

        const k3sData = {
            "module" : data.module,
            "version": data.version,
            "value" : `var ${data.module.toUpperCase() + "K8sVersion" + data.version.substring(0, data.version.indexOf('+')).split('v').join('').split('.').join('')} = \"${data.version}\"`
        }

        axiosWithAuth()
        .post('http://localhost:5001/api/k8s/', k3sData)
        .then( res => (
            console.log('res',res),
            setCount(count + 1),
            setTypeDetails('version_success')
        ))
        .catch(err => (
            console.log(err),
            setTypeDetails('version_error')
        ))
    }

    const AddRke1 = e => {
        e.preventDefault()

        const rke1Data = {
            "module" : data.module,
            "version": data.version,
            "value" : `var ${data.module.toUpperCase() + 'K8sVersion' + data.version.substring(0, data.version.indexOf('-')).split('v').join('').split('.').join('')} = \"${data.version}\"`
        }

        axiosWithAuth()
        .post('http://localhost:5001/api/k8s/', rke1Data)
        .then( res => (
            console.log('res',res),
            setCount(count + 1),
            setTypeDetails('version_success')
        ))
        .catch(err => (
            console.log(err),
            setTypeDetails('version_error')
        ))

    }
   
    
    return (
        <div className='module-details'>
            <h2 className='spec-title'> ADD KUBERNETES VERSION</h2>
            {/* <div className='spec-wrapper'> */}

            <form className='spec-wrapper' onSubmit={data.module === "aks" ? AddAks : data.module === "k3s" || data.module === "rke2" ? AddK3s : data.module === "rke1" ? AddRke1 : null}>
                <label className='spec' htmlFor='module'>Module:
                <select onChange={e => setData({...data, module: e.target.value})} name="module">
                    {modules.map(m => <option value={m.module}>{m.module}</option>)}
                </select>
                    {/* <input type='text' name='module' value={data.module} onChange={e => setData({...data, module: e.target.value})}  /> */}
                </label>
                <label className='spec' htmlFor='version'>Version:
                    <input type='text' name='version' value={data.version} onChange={e => setData({...data, version: e.target.value})}  />
                </label>
                {/* <button className='spec'>Submit</button> */}
            </form>
            {/* </div> */}
        </div>
    )
}