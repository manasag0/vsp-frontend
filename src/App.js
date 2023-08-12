import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
  return (
    <div className="App">
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
