import React from "react";
import "./Auth.css";
import logo from "./Assets/eduCentralLogo.png";

const Register = () => {
  return (
    <div>
      <section className="min-h-screen flex">
        <div className="lg:w-1/2 w-full flex flex-col justify-center  md:px-16 px-0 z-0 text-black">
          <div className="top-0 absolute p-4 text-center right-0 left-0">
            <img src={logo} alt="logo" />
          </div>

          <div className="">
            <h1 className="welcome">Welcome to eduCentral</h1>
            <p>welcome please enter your details</p>
          </div>

          <div className="w-full ">
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

              <div className="pb-2 pt-4">
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Phone No"
                  className="form-input"
                />
              </div>

              <div className="pb-2 pt-4">
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>

              {/* <div className="flex items-start">
             
                <input
                  className="form-input"
                  type="checkbox"
                  name="password"
                  id="remenber"
                  placeholder="remenber"
                />
                 <label htmlFor="">Remenber Me</label>
           

             

              </div> */}
            </form>
            <div class="w-full mt-20">
              <button class="ent-btn block w-full p-4 text-lg text-white rounded-lg">
                {" "}
                Signup
              </button>
              <p className="pt-3">
                Already have an account ?{" "}
                <span className="text-blue-600">Login</span>
              </p>
            </div>
          </div>
        </div>

        <div className="Hhalf lg:flex w-1/2 hidden relative items-center text-white">
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

export default Register;
