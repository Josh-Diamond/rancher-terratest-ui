import React, { useState, useEffect } from 'react'
import '../styles/Config.css'
import axiosWithAuth from '../components/auth/axiosWithAuth'
import { Nav } from '../components/nav/Nav'

export const Config = ({setAuth, isOpen, setIsOpen}) => {
    const [modules, setModules] = useState([])
    const [k8sVersions, setK8sVersions] = useState([])
    const [nodes, setNodes] = useState([])
    const [nodepools, setNodepools] = useState([])

    useEffect(() => {
        axiosWithAuth()
          .get('http://localhost:5001/api/modules')
          .then(res => setModules(res.data))
          .catch(err => console.log(err))

          axiosWithAuth()
          .get('http://localhost:5001/api/k8s')
          .then(res => setK8sVersions(res.data))
          .catch(err => console.log(err))

          axiosWithAuth()
          .get('http://localhost:5001/api/nodes')
          .then(res => setNodes(res.data))
          .catch(err => console.log(err))
      },[])

    return (
        <div className='config-wrapper'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='config'>
                <h2 className='config-title'>Config Page</h2>
                <section className="modules">
                    <h2>Modules</h2>
                    {modules.map(m => <p>{m.value}</p>)}
                </section>
                <section className="k8sversions">
                    <h2>Kubernetes Versions</h2>
                    {k8sVersions.map(k => <p>{k.value}</p>)}
                </section>
                <section className="nodes">
                    <h2>Nodes</h2>
                    {nodes.map(n => <p>{n.name}</p>)}
                </section>
                <section className="nodepools">
                    <h2>Node pools</h2>
                </section>
            </div>
        </div>
    )
}