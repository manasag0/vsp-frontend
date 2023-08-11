import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Upload from './pages/Upload';
// import UserValid from './pages/Uservalid';
// import MainVideo from './pages/MainVideo';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
{/* <BrowserRouter>
     <Route path="/" element={<Home />} />       
     <Routes>
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/video-stream/:id" element={<MainVideo />} />
        <Route path="/user/:username" element={<UserValid />} />
      
      </Routes>
      </BrowserRouter> */}



  <Home />      
    </div>
  )
}

export default App