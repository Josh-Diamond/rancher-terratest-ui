import React, { useState, useEffect } from 'react'
import '../styles/Config.css'
import axiosWithAuth from '../components/auth/axiosWithAuth'

export const Config = () => {
    const [modules, setModules] = useState([])
    const [k8sVersions, setK8sVersions] = useState([])
    const [nodes, setNodes] = useState([])
    const [nodepools, setNodepools] = useState([])

    useEffect(() => {
        axiosWithAuth()
          .get('http://localhost:5001/api/user')
          .then(res => console.log(res.data[0].username))
          .catch(err => console.log(err))
      },[])

    return (
        <div className='config'>
            <h2 className='config-title'>Config Page</h2>
            <section className="modules">
                <h2>Modules</h2>
            </section>
            <section className="k8sversions">
                <h2>Kubernetes Versions</h2>
            </section>
            <section className="nodes">
                <h2>Nodes</h2>
            </section>
            <section className="nodepools">
                <h2>Node pools</h2>
            </section>
        </div>
    )
}