import './styles/App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Manage } from './pages/Manage'
import { Config } from './pages/Config'
import { Routes,Route } from 'react-router-dom'
import { Nav } from './components/nav/Nav.jsx'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path ="/create" element={<Create />} />
        <Route path ="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
