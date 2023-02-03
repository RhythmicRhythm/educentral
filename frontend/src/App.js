import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <ToastContainer />
      <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
