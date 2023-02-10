import React from "react";
import eduLogo from "./Assets/eduLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="mx-auto max-w-7xl px-8 md:px-6">
        <div className="flex flex-wrap justify-center flex-col-reverse md:flex-row gap-10">
          <div className="w-full lg:w-5/12 md:w-5/12 text-center md:text-left ">
            <h1 className="text-3xl font-bold mb-6">
              Access Unlimited Communications with our Platform
            </h1>
            <p className="text-sm font-medium mb-20">
              eduCENTRAL is a platform for creative expression and
              collaboration, with features like a customizable profile,
              portfolio, and tools for creating and sharing content. A place to
              discover and join communities centered around shared interests,
              opinions and ideas with features like forums, and groups.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center ">
              <button className="bg-purple-600 block w-48 p-2 text-lg text-white rounded-lg mb-2">
              <Link className="text-sm" to="/login">
              Login as an admin{" "}
              </Link>
              </button>

              <button className="ent-btn block w-48 p-2 text-lg text-white rounded-lg mb-2">
              <Link className="text-sm" to="/login">
              Login as a menber{" "}
              </Link>
              </button>
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-4 items-center">
            <img src={eduLogo} className="w-64 md:w-96" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
