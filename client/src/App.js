import './styles/App.css';
import { Home } from './pages/Home'
import { Create } from './pages/Create'
import { Manage } from './pages/Manage'
import { Routes,Route } from 'react-router-dom'
import { Nav } from './components/nav/Nav.jsx'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path ="/create" element={<Create />} />
        <Route path ="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
