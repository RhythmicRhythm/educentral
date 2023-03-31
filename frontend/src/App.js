import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import A from "./pages/Community/A";
import Profile from "./components/Profile/Profile";
import axios from "axios";
import { getLoginStatus } from "./services/authServices";
import { SET_LOGIN, selectIsAdmin } from "./redux/features/auth/authSlice";
import Presidential from "./components/dummypages/Presidential";
import EditGroup from "./pages/Community/CreateGroup/EditGroup";
import EditWorkspace from "./pages/Community/CreateGroup/EditWorkspace";
import AddWorkspace from "./pages/Community/CreateGroup/AddWorkspace";
import NewForum from "./pages/Community/CreateGroup/NewForum";
import Workspaces from "./pages/Community/CreateGroup/workspaces";
import AdminDashboard from "./pages/Community/Dashboard/AdminDashboard";
import UserDashboard from "./pages/Community/Dashboard/UserDashboard";
import NewDashboard from "./pages/Community/Dashboard/NewDashboard";
import Members from "./pages/Community/Members/Members";
import Post from "./pages/Community/Posts/Post";

axios.defaults.withCredentials = true;

function App() {
  const isAdmin = useSelector(selectIsAdmin);
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
          <Route path="/" element={<Navigate to="/login" replace={true} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/emailsent" element={<Emailsent />} />
          <Route
            path="/resetpassword/:resetToken"
            element={<Resetpassword />}
          />
          <Route path="/resetdone" element={<Resetdone />} />
          {/* COMMUNITY */}

          {/* dashboards */}

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  {isAdmin ? <AdminDashboard /> : <UserDashboard />}
                </Layout>
              </Sidebar>
            }
          />

          <Route path="/newdashboard" element={<NewDashboard />} />
          {/* dashboards */}

          {/* posts */}

          <Route path="/dashboard/:id" element={<Post />} />
          {/* posts */}

          <Route path="/creategroup" element={<Creategroup />} />

          {/* <Route path="/creatinggroup" element={<Creatinggroup />} /> */}
          <Route path="/adminhomepage" element={<AdminHomepage />} />
          <Route path="/a" element={<A />} />

          {/* <Route
            path="/dashboard"
            element={
              <Sidebar>
                <Layout>
                  <Dashboard />
                </Layout>
              </Sidebar>
            }
          /> */}

          <Route path="/creatinggroup" element={<Creatinggroup />} />

          <Route
            path="/editgroup"
            element={
              <Sidebar>
                <Layout>
                  <EditGroup />
                </Layout>
              </Sidebar>
            }
          />

          <Route path="/editworkspace" element={<EditWorkspace />} />

          <Route path="/addworkspace" element={<AddWorkspace />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/createnewforum" element={<NewForum />} />

          <Route
            path="/profile"
            element={
              <Sidebar>
                <Layout>
                  <Profile />
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/members"
            element={
              <Sidebar>
                <Layout>
                  <Members />
                </Layout>
              </Sidebar>
            }
          />

          <Route
            path="/presidential"
            element={
              <Sidebar>
                <Layout>
                  <Presidential />
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
