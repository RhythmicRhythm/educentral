import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Forgot from './pages/Auth/Forgot';
import Emailsent from './pages/Auth/Emailsent';
import Resetpassword from './pages/Auth/Resetpassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <ToastContainer />
      <Routes>
    
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<Forgot />} />
      <Route path="/emailsent" element={<Emailsent />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
