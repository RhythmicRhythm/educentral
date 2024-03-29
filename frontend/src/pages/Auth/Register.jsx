import React, { useState } from "react";
import "./Auth.css";
import logo from "./Assets/eduCentralLogo.png";
import { Link, useNavigate } from "react-router-dom";
import Vector from "./Assets/Vector.png";
import Icon from "react-icons-kit";
import { toast } from "react-toastify";
import Load from "./Assets/1497.gif";
import { useDispatch } from "react-redux";
import { registerUser, validateEmail } from "../../services/authServices";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { SET_LOGIN, SET_NAME } from "../../redux/features/auth/authSlice";

const initialState = {
  email: "",
  phone: "",
  password: "",
  password2: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, phone, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!phone || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      email,
      phone,
      password,
    };

    try {
      setIsLoading(true);
      const data = await registerUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.firstname));
      navigate("/dashboard");
      console.log("registered");
      // setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
    

  return (
    <div>
      <section className="min-h-screen flex">
        <div className=" lg:w-1/2 w-full flex flex-col justify-center  md:px-16 px-0 z-0 text-black">
          <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
            <div className="top-0 absolute p-4 text-center right-0 left-0">
              <img src={logo} alt="logo" />
            </div>
            {isLoading ? (<div className="">
              <img className="w-[8rem]" src={Load} alt="" />
            </div>) : (
              <div
              className="w-96
        mx-auto rounded-lg bg-white p-5 text-gray-800 flex flex-col items-center justify-center"
            >
            
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">
                  Welcome to eduCENTRAL
                </h1>
                <p className="text-sm">welcome please enter your details</p>
              </div>

              <form onSubmit={register} className=" w-full">
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-input"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pb-2 pt-4">
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone No"
                    className="form-input"
                    value={phone}
                    onChange={handleInputChange}
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
                    <span
                      className="icon-span"
                      onClick={() => setType("password")}
                    >
                      <Icon icon={basic_eye} size={18} />
                    </span>
                  )}
                </div>

                <div className="pb-2 pt-4 relative">
                  <input
                    className="form-input"
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Confirm password"
                    value={password2}
                    onChange={handleInputChange}
                  />

                  <div className="absolute left-0 mt-2">
                    <input
                      className="form-input"
                      type="checkbox"
                      name="remenber"
                      id="remenber"
                      placeholder="remenber"
                    />
                  </div>
                  <div className="absolute left-4 mt-2">
                    <p className="text-sm">Remenber me </p>
                  </div>
                </div>

                <div className="w-full mt-20 relative">
                  <button
                    type="submit"
                    className="ent-btn block w-full p-4 text-lg text-white rounded-lg"
                  >
                    {" "}
                    Sign Up
                  </button>
                  <p className="pt-3 mt-4">
                    Already have an account ?{" "}
                    <span className="">
                      <Link
                        className="text-sm text-blue-800 font-bold"
                        to="/login"
                      >
                        Login
                      </Link>
                    </span>
                  </p>
                  <img
                    className="vector absolute right-0 mr-10 w-14"
                    src={Vector}
                    alt=""
                  />
                </div>
              </form>
            </div>
            )}
            
          </div>
        </div>

        <div className="register-half lg:flex w-1/2 hidden relative items-center text-white">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full absolute bottom-0 p-14 right-0 left-0 max-w-xl">
            <h1 className="text-3xl font-bold text-left ">
              Manage your team properly and share thoughts together with our
              Platform!
            </h1>
            <p className="text-sm mt-10 text-left">
              Stay on the same page and make decisions more quickly by bringing
              all of your work communication into one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
