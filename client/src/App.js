import { useState, useEffect } from 'react'
import './styles/App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Manage } from './pages/Manage'
import { Config } from './pages/Config'
import CreatedBy from './components/design/CreatedBy'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import axiosWithAuth from './components/auth/axiosWithAuth'
import logo from './static/diamondlogo.png'

function App() {
const [auth, setAuth] = useState(false)
const [isOpen, setIsOpen] = useState(false)
const [createdBy, setCreatedBy] = useState(false)
// config
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
const [count, setCount] = useState(0)

useEffect(() => {
  axiosWithAuth()
    .get('http://localhost:5001/api/modules')
    .then(res => setModules(res.data))
    .catch(err => console.log(err))

    axiosWithAuth()
    .get('http://localhost:5001/api/k8s')
    .then(res => {
      setAksVersions(res.data.filter(version => version.module === 'aks').reverse())
      setK3sVersions(res.data.filter(version => version.module === 'k3s').reverse())
      setRke1Versions(res.data.filter(version => version.module === 'rke1').reverse())
      setRke2Versions(res.data.filter(version => version.module === 'rke2').reverse())
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
},[count])

  return (
    <div className="App">
      {createdBy ? <CreatedBy setCreatedBy={setCreatedBy} /> : null}
      <img src={logo} className="diamond-logo unselectable" onClick={() => setCreatedBy(true)} />
      <Routes>
        <Route exact path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Home isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>}/>
        <Route path="/config" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen} modules={modules} aksVersions={aksVersions} k3sVersions={k3sVersions} rke1Versions={rke1Versions} rke2Versions={rke2Versions} nodes={nodes} nodepools={nodepools} moduleDetails={moduleDetails} setModuleDetails={setModuleDetails} versionDetails={versionDetails} setVersionDetails={setVersionDetails} nodeDetails={nodeDetails} setNodeDetails={setNodeDetails} nodepoolDetails={nodepoolDetails} setNodepoolDetails={setNodepoolDetails} typeDetails={typeDetails} setTypeDetails={setTypeDetails} count={count} setCount={setCount}><Config isOpen={isOpen} setIsOpen={setIsOpen} modules={modules} aksVersions={aksVersions} k3sVersions={k3sVersions} rke1Versions={rke1Versions} rke2Versions={rke2Versions} nodes={nodes} nodepools={nodepools} moduleDetails={moduleDetails} setModuleDetails={setModuleDetails} versionDetails={versionDetails} setVersionDetails={setVersionDetails} nodeDetails={nodeDetails} setNodeDetails={setNodeDetails} nodepoolDetails={nodepoolDetails} setNodepoolDetails={setNodepoolDetails} typeDetails={typeDetails} setTypeDetails={setTypeDetails} count={count} setCount={setCount} /></PrivateRoute>} />
        <Route path ="/create" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Create isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>} />
        <Route path ="/manage" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Manage isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
