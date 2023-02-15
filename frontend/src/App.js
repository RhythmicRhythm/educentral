import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Auth/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Forgot from "./pages/Auth/Forgot";
import Emailsent from "./pages/Auth/Emailsent";
import Resetpassword from "./pages/Auth/Resetpassword";
import Resetdone from "./pages/Auth/Resetdone";
import Creategroup from "./pages/Community/CreateGroup/Creategroup";
import Creatinggroup from "./pages/Community/CreateGroup/Creatinggroup";
import AdminHomepage from "./pages/Community/AdminHomepage";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Community/Dashboard";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import A from "./pages/Community/A";
import axios from "axios";
import { getLoginStatus } from "./services/authServices";
import { SET_LOGIN } from "./redux/features/auth/authSlice";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

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
          <Route path="/creatinggroup" element={<Creatinggroup />} />
          <Route path="/adminhomepage" element={<AdminHomepage />} />
          <Route path="/a" element={<A />} />
          <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Layout>
                <Dashboard />
              </Layout>
            </Sidebar>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
