import React from 'react'
import '../../styles/K8sversion.css'

export const KubernetesVersion = ({ version }) => {

    return (
        <div className='k8s-container'>
            <p>• {version.version}</p>
        </div>
    )
}