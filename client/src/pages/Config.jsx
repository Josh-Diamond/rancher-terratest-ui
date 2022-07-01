import React, { useState, useEffect } from 'react'
import '../styles/Config.css'
import axiosWithAuth from '../components/auth/axiosWithAuth'
import { Nav } from '../components/nav/Nav'
import { Module } from '../components/config/Module'
import { ModuleDetails } from '../components/config/ModuleDetails'
import { VersionDetails } from '../components/config/VersionDetails'
import { NodeDetails } from '../components/config/NodeDetails'
import { NodepoolDetails } from '../components/config/NodepoolDetails'
import { KubernetesVersion } from '../components/config/KubernetesVersion'
import { Node } from '../components/config/Node'
import { Nodepool } from '../components/config/Nodepool'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSquarePlus} from '@fortawesome/free-solid-svg-icons'

export const Config = ({setAuth, isOpen, setIsOpen}) => {
    const [modules, setModules] = useState([])
    const [aksVersions, setAksVersions] = useState([])
    const [k3sVersions, setK3sVersions] = useState([])
    const [rke1Versions, setRke1Versions] = useState([])
    const [rke2Versions, setRke2Versions] = useState([])
    const [nodes, setNodes] = useState([])
    const [nodepools, setNodepools] = useState([])
    const [moduleDetails, setModuleDetails] = useState({})
    const [versionDetails, setVersionDetails] = useState({})
    const [nodeDetails, setNodeDetails] = useState({})
    const [nodepoolDetails, setNodepoolDetails] = useState({})
    const [typeDetails, setTypeDetails] = useState('')

    console.log("mod", moduleDetails)
    console.log("version", versionDetails)
    console.log("node", nodeDetails)
    console.log("pool", nodepoolDetails)
    console.log('type', typeDetails)
    useEffect(() => {
        axiosWithAuth()
          .get('http://localhost:5001/api/modules')
          .then(res => setModules(res.data))
          .catch(err => console.log(err))

          axiosWithAuth()
          .get('http://localhost:5001/api/k8s')
          .then(res => {
            setAksVersions(res.data.filter(version => version.module === 'aks'))
            setK3sVersions(res.data.filter(version => version.module === 'k3s'))
            setRke1Versions(res.data.filter(version => version.module === 'rke1'))
            setRke2Versions(res.data.filter(version => version.module === 'rke2'))
          })
          .catch(err => console.log(err))

          axiosWithAuth()
          .get('http://localhost:5001/api/nodes')
          .then(res => setNodes(res.data))
          .catch(err => console.log(err))

          axiosWithAuth()
          .get('http://localhost:5001/api/nodepools')
          .then(res => setNodepools(res.data))
          .catch(err => console.log(err))
      },[])

    return (
        <div className='config-wrapper unselectable'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='config'>
                <h2 className='config-title'>CONFIG</h2>
                <div className='config-page'>
                <section className="modules">
                    <div className='header'>
                        <h2 className='blue-underline'>Modules</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                    </div>
                    <div className='map'>
                        {modules.map(m => <Module module={m} setModuleDetails={setModuleDetails} setTypeDetails={setTypeDetails} />)}
                    </div>
                </section>
                <section className='k8sversions'>
                    <div className='header'>
                        <h2 className='blue-underline'>Kubernetes Versions</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                    </div>
                    <div className='map'>
                        <div className='k8s-title'>
                            <h2>AKS</h2>
                            <div className='k8s-versions'>
                                {aksVersions.map(k => <KubernetesVersion setVersionDetails={setVersionDetails} setTypeDetails={setTypeDetails} version={k} />)}
                            </div>
                        </div>
                        <div className='k8s-title'>
                            <h2>K3S</h2>
                            <div className='k8s-versions'>
                                {k3sVersions.map(k => <KubernetesVersion setVersionDetails={setVersionDetails} setTypeDetails={setTypeDetails} version={k} />)}
                            </div>
                        </div>
                        <div className='k8s-title'>
                            <h2>RKE1</h2>
                            <div className='k8s-versions'>
                                {rke1Versions.map(k => <KubernetesVersion setVersionDetails={setVersionDetails} setTypeDetails={setTypeDetails} version={k} />)}
                            </div>
                        </div>
                        <div className='k8s-title'>
                            <h2>RKE2</h2>
                            <div className='k8s-versions'>
                                {rke2Versions.map(k => <KubernetesVersion setVersionDetails={setVersionDetails} setTypeDetails={setTypeDetails} version={k} />)}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='nodes'>
                <div className='header'>
                        <h2 className='blue-underline'>Nodes</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                    </div>
                    <div className='map'>
                    {nodes.map(n => <Node setNodeDetails={setNodeDetails} setTypeDetails={setTypeDetails} node={n} />)}
                    </div>
                </section>
                <section className='nodepools'>
                <div className='header'>
                        <h2 className='blue-underline'>Node Pools</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                    </div>
                <div className='map'>
                {nodepools.map(np => <Nodepool nodepool={np} setNodepoolDetails={setNodepoolDetails} setTypeDetails={setTypeDetails} />)}
                </div>
                </section>
                <section className='nodepools'>
                <div className='header'>
                        <h2 className='blue-underline'>Details</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' />
                    </div>
                <div className='map'>
                {typeDetails === 'module' ? <ModuleDetails module={moduleDetails} /> : null}
                {typeDetails === 'version' ? <VersionDetails version={versionDetails} /> : null}
                {typeDetails === 'node' ? <NodeDetails node={nodeDetails} /> : null}
                {typeDetails === 'nodepool' ? <NodepoolDetails nodepool={nodepoolDetails} /> : null}
                {typeDetails === '' ? <p>Make a selection to view details</p> : null}

                </div>
                </section>
                </div>
            </div>
        </div>
    )
}