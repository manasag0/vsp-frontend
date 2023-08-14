import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import MainVideo from './Components/MainVideo';
import ValidUserLanding from './pages/ValidUserLanding';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/video-stream/:id" element={<MainVideo/>}/>
        <Route path="/user/:username" element={<ValidUserLanding/>}/>
      </Routes>
    </div>
  );
}

export default App;
