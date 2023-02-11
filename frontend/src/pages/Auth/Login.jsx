import React, { useState }  from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";
import logo from "./Assets/eduCentralLogo.png";
import Vector from "./Assets/Vector.png";
import Icon from "react-icons-kit";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { toast } from "react-toastify";
import { loginUser, validateEmail } from "../../services/authServices";

const initialState = {
  email: "",
  password: "",
};


const Login = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const BACKEND_URL = "http://localhost:5000";

  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };

  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
      console.log("log in");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
 

  };


  return (
    <div>
      <section className="min-h-screen flex">
        <div className="lg:w-1/2 w-full flex flex-col justify-center  md:px-16 px-0 z-0 text-black">
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="top-0 absolute p-4 text-center right-0 left-0">
              <img src={logo} alt="logo" />
            </div>
            <div
              className="w-96
        mx-auto rounded-lg bg-white p-5 text-gray-800 flex flex-col items-center justify-center"
            >
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, Eugene
                </h1>
                <p className="text-sm">
                  welcome back! please enter your details
                </p>
              </div>

              <form onSubmit={login}className=" w-full">
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                    className="form-input"

                  />
                </div>

                <div className="pb-2 pt-4 relative">
                  <input
                    className="form-input"
                    type={type}
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                  />
                          {type === "password" ? (
                <span className="icon-span" onClick={() => setType("text")}>
                  <Icon icon={basic_eye_closed} size={18} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType("password")}>
                  <Icon icon={basic_eye} size={18} />
                </span>
              )}

                  <div className="absolute left-0 mt-2">
                    <input
                      className="form-input"
                      type="checkbox"
                      name="password"
                      id="remenber"
                      placeholder="remenber"
                    />
                  </div>
                  <div className="absolute left-4 mt-2">
                    <p className="text-sm">Remenber me </p>
                  </div>
                  <div className="absolute right-0 mt-2">
                    <Link
                      className="text-sm text-blue-900"
                      to="/forgotpassword"
                    >
                      Forgot Password?{" "}
                    </Link>
                  </div>
                </div>

                <div className="w-full mt-20 relative">
                  <button type="submit" 
                  className="ent-btn block w-full p-4 text-lg text-white rounded-lg">
                    {" "}
                    Login
                  </button>
                  <p className="pt-3 mt-4">
                    Don't have an account ?{" "}
                    <span className="">
                      <Link
                        className="text-sm text-blue-800 font-bold"
                        to="/register"
                      >
                        Sign up for free{" "}
                      </Link>
                    </span>
                  </p>
                  <img
                    className="vector absolute right-0 mr-4 w-15"
                    src={Vector}
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="login-half lg:flex w-1/2 hidden relative items-center text-white">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full absolute bottom-0 p-14 text-center right-0 left-0 max-w-xl">
            <h1 className="text-3xl font-bold text-left tracking-wide">
              Connect with your members
            </h1>
            <p className="text-sm mt-10 text-left">
              Bring the right people and information together in channels. Share
              ideas, make decisions and move work forward with a common purpose
              and place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
