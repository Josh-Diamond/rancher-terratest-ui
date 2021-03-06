import React from 'react'
import '../../styles/K8sversion.css'

export const KubernetesVersion = ({ version, setVersionDetails, setTypeDetails }) => {
    const setDetails = () => {
        setVersionDetails(version)
        setTypeDetails('version')
    }
    return (
        <div className='k8s-container' onClick={() => setDetails()}>
            <p>{version.version}</p>
        </div>
    )
}