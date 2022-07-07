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
import { AddModule } from '../components/config/AddModule'
import { AddVersion } from '../components/config/AddVersion'
import { AddNode } from '../components/config/AddNode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faMinus, faXmark} from '@fortawesome/free-solid-svg-icons'

export const Config = ({setAuth, isOpen, setIsOpen, modules, aksVersions, k3sVersions, rke1Versions, rke2Versions, nodes, nodepools, moduleDetails, setModuleDetails, versionDetails, setVersionDetails, nodeDetails, setNodeDetails, nodepoolDetails, setNodepoolDetails, typeDetails, setTypeDetails, count, setCount}) => {

    return (
        <div className='config-wrapper unselectable'>
            <Nav setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='config'>
                <h2 className='config-title'>CONFIG</h2>
                <div className='config-page'>
                <section className="modules">
                    <div className='header'>
                        <h2 className='blue-underline'>Modules</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' onClick={(()=> setTypeDetails('add_module'))} />
                    </div>
                    <div className='map'>
                        {modules.map(m => <Module module={m} setModuleDetails={setModuleDetails} setTypeDetails={setTypeDetails} />)}
                    </div>
                </section>
                <section className='k8sversions'>
                    <div className='header'>
                        <h2 className='blue-underline'>Kubernetes Versions</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' onClick={(()=> setTypeDetails('add_version'))} />
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
                        <FontAwesomeIcon icon={faPlus} className='icon' onClick={(()=> setTypeDetails('add_node'))} />
                    </div>
                    <div className='map'>
                    {nodes.map(n => <Node setNodeDetails={setNodeDetails} setTypeDetails={setTypeDetails} node={n} />)}
                    </div>
                </section>
                <section className='nodepools'>
                <div className='header'>
                        <h2 className='blue-underline'>Node Pools</h2>
                        <FontAwesomeIcon icon={faPlus} className='icon' onClick={(()=> setTypeDetails('add_nodepool'))} />
                    </div>
                <div className='map'>
                {nodepools.map(np => <Nodepool nodepool={np} setNodepoolDetails={setNodepoolDetails} setTypeDetails={setTypeDetails} />)}
                </div>
                </section>
                <section className='details'>
                <div className='header'>
                        {typeDetails != 'add_module' && typeDetails != 'add_version' && typeDetails != 'add_node' && typeDetails != 'add_nodepool' && typeDetails != 'module_success' && typeDetails != 'module_error' ? <h2 className='blue-underline'>Details</h2> : null}
                        {typeDetails === 'add_module' || typeDetails === 'add_version' || typeDetails === 'add_node' || typeDetails === 'add_nodepool' ? <h2 className='blue-underline'>Create</h2> : null}
                        {typeDetails === 'module_success' ? <h2 className='blue-underline'>Success</h2> : null}
                        {typeDetails === 'module_error' ? <h2 className='blue-underline'>Error</h2> : null}
                        {typeDetails === '' ? null : <FontAwesomeIcon icon={faXmark} className='icon' onClick={() => setTypeDetails('')} />}
                        
                    </div>
                <div className='map'>
                {/* Details */}
                {typeDetails === 'module' ? <ModuleDetails module={moduleDetails} count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {typeDetails === 'version' ? <VersionDetails version={versionDetails} count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {typeDetails === 'node' ? <NodeDetails node={nodeDetails} count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {typeDetails === 'nodepool' ? <NodepoolDetails nodepool={nodepoolDetails} count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {/* Add */}
                {typeDetails === 'add_module' ? <AddModule count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {typeDetails === 'add_version' ? <AddVersion modules={modules} count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {typeDetails === 'add_node' ? <AddNode count={count} setCount={setCount} setTypeDetails={setTypeDetails} /> : null}
                {/* Notes */}
                {typeDetails === '' ? <p className='detail-note'>Make a selection to view details</p> : null}
                {typeDetails === 'module_success' ? <p className='detail-note'>Module created</p> : null}
                {typeDetails === 'module_error' ? <p className='detail-note'>Error encountered</p> : null}

                </div>
                </section>
                </div>
            </div>
        </div>
    )
}