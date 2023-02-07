import React from "react";
import { Link, } from "react-router-dom";
import "./Auth.css";
import logo from "./Assets/eduCentralLogo.png";
import Vector from "./Assets/Vector.png";

const Login = () => {
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
                <h1 className="text-3xl font-bold mb-2">Welcome back, Eugene</h1>
                <p className="text-sm">welcome back! please enter your details</p>
              </div>

              <form action="" className=" w-full">
                <div className="pb-2 pt-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-input"
                  />
                </div>


                <div className="pb-2 pt-4 relative">
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />

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
                    <Link className="text-sm text-blue-900" to="/forgotpassword">
                        Forgot Password?{" "}
                      </Link>
                  </div>
                </div>

                <div className="w-full mt-20 relative">
                  <button className="ent-btn block w-full p-4 text-lg text-white rounded-lg">
                    {" "}
                    Login
                  </button>
                  <p className="pt-3 mt-4">
                    Don't have an account ?{" "}
                    <span className="">
                      <Link className="text-sm text-blue-800 font-bold" to="/register">
                        Sign up for free{" "}
                      </Link>
                    </span>
                  </p>
                  <img className="vector absolute right-0 mr-4 w-10" src={Vector} alt="" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="login-half lg:flex w-1/2 hidden relative items-center text-white">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full absolute bottom-0 absolute p-14 text-center right-0 left-0">
            <h1 className="text-3xl font-bold text-left tracking-wide">
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

export default Login;
