import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Auth/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import Emailsent from "./pages/Auth/Emailsent";
import Resetpassword from "./pages/Auth/Resetpassword";
import Resetdone from "./pages/Auth/Resetdone";
import Creategroup from "./pages/Community/Creategroup";
import Sidebar from "./pages/Community/Sidebar";
import AdminHomepage from "./pages/Community/AdminHomepage";
import A from "./pages/Community/A";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* AUTHENTICATION */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/emailsent" element={<Emailsent />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/resetdone" element={<Resetdone />} />
          {/* COMMUNITY */}
          <Route path="/creategroup" element={<Creategroup />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/adminhomepage" element={<AdminHomepage />} />
          <Route path="/a" element={<A />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
