import { useState } from 'react'
import './styles/App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Manage } from './pages/Manage'
import { Config } from './pages/Config'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import logo from './static/diamondlogo.png'

function App() {
const [auth, setAuth] = useState(false)
const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <img src={logo} className="diamond-logo unselectable" />
      <Routes>
        <Route exact path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/home" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Home isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>}/>
        <Route path="/config" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Config isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>} />
        <Route path ="/create" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Create isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>} />
        <Route path ="/manage" element={<PrivateRoute auth={auth} setAuth={setAuth} isOpen={isOpen} setIsOpen={setIsOpen}><Manage isOpen={isOpen} setIsOpen={setIsOpen} /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
