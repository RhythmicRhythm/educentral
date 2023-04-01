import React, { useState, useEffect } from "react";
import "./Newdashboard.css";
import logo from "../Assets/Napps.png";
import Icon from "react-icons-kit";

const NewDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleCloseClick() {
    setIsMenuOpen(false);
  }
  return (
    <div className="c-container">
      <aside style={{ display: isMenuOpen ? "block" : "none" }}>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
            <h2 className="text-xl text-gray-600 font-bold">
              Napps
            </h2>
          </div>
          <div className="close ml-12 mb-2" onClick={handleCloseClick}>
            <img className="w-4" src="https://img.icons8.com/stickers/256/x.png" alt="" />
          </div>
        </div>
        <div className="sidebar">
          {/* Sidebar Links */}
          <div className="anchor-link">
            <img className="w-4"
             src="https://img.icons8.com/fluency/256/dashboard-layout.png" alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className="anchor-link active">
            <img className="w-4" src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/256/external-premium-membership-ecommerce-3-sbts2018-outline-color-sbts2018.png" alt="" />
            <h1>Members</h1>
          </div>
          <div className="anchor-link">
            <img className="w-4" src="https://img.icons8.com/stickers/256/user-skin-type-1.png" alt="" />
            <h1>Profile</h1>
          </div>
          <div className="anchor-link">
             <img className="w-4" src="https://img.icons8.com/stickers/256/collaboration-female-male.png" alt="" />
            <h1>Dashboard</h1>
          </div>
          <div className="anchor-link">
           <img className="w-4" src="https://img.icons8.com/stickers/256/door-opened.png" alt="" />
            <h1>Sign Out</h1>
          </div>
          {/* Sidebar Links */}
        </div>
      </aside>

      {/* =============== END OF ASIDE===============   */}
      <main>
        <h1>Dashboard</h1>
        <div className="date">
          <input type="date" />
        </div>

        <div className="insight bg-white p-4 rounded-lg shadow mt-6">
          <div className="">
            <div className="">
              <h2 className="text-sm text-gray-600 font-bold">Create Post</h2>
              <form
                // onSubmit={createpost}
                className=" w-full mt-6 text-sm text-gray-500"
              >
                <div className="pb-2 pt-4 text-left">
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    // value={desc}
                    placeholder="What's on your mind?"
                    className="form-input-d"
                    // onChange={handleInputChange}
                  />
                </div>

                <div className="pb-2 pt-2 text-left flex justify-between flex-row">
                  {/* <label className="font-bold text-gray-700 text-sm mb-2">
                    Add Image
                  </label> */}
                  <input
                    className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700"
                    type="file"
                    name="image"
                    id="image"
                    // onChange={handleImageChange}
                  />
                  <div className="">
                    <img className="w-8" src="https://img.icons8.com/stickers/256/paper-plane.png" alt="" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    {/* <button
                    //   disabled={isDescEmpty}
                      type="submit"
                      className="transition duration-500 ease bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 
                      hover:from-blue-900 hover:to-pink-600
                      text-lg font-semibold rounded-lg text-white px-3 py-1 cursor-pointer"
                    >
                      Add Post
                    </button> */}
                  </div>
                </div>
              </form>
            </div>
            <div className=""></div>
          </div>
        </div>

        <div className="insight bg-white p-4 rounded-lg shadow mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div className="w-10 ">
                <img src="http://127.0.0.1:5500/images/user-8.png" alt="" />
              </div>
              <div className="">
                <h1 className="text-sm text-gray-600"> John Doe</h1>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
              <span className="text-blue-400">See more</span>{" "}
            </p>
          </div>
        </div>

        <div className="insight bg-white p-4 rounded-lg shadow mt-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-4">
              <div className="w-10 ">
                <img src="http://127.0.0.1:5500/images/user-8.png" alt="" />
              </div>
              <div className="">
                <h1 className="text-sm text-gray-600"> John Doe</h1>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
              <span className="text-blue-400">See more</span>{" "}
            </p>
            <img
              className="rounded-lg"
              src="http://127.0.0.1:5500/images/t-31.jpg"
              alt=""
            />
          </div>
        </div>

        {/* =============== END OF INSIGHTS ===============   */}
      </main>

      {/* =========== END OF MAIN ===========  */}
      <div className="right">
        <div className="top">
          <button onClick={handleMenuClick}>
            <img className="w-6" src="https://img.icons8.com/stickers/256/xbox-menu.png" alt="" />
          </button>
          <div className="profile">
            <div className="info">
              <p>
                Hi, <b>MR John</b>
              </p>
              <small>Admin</small>
            </div>
            <div className="profile-photo">
              <img src="" alt="" />
            </div>
          </div>
        </div>

        {/* ===========END OF TOP ===========*/}
        <div className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="" alt="" />
              </div>
              <div className="messages">
                <p>
                  Mike Tyson <b>recieved his order of exclusive gps drones </b>{" "}
                </p>
                <small>2 minutes ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="" alt="" />
              </div>
              <div className="messages">
                <p>
                  Mike Tyson <b>recieved his order of exclusive gps drones </b>{" "}
                </p>
                <small>2 minutes ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="" alt="" />
              </div>
              <div className="messages">
                <p>
                  Mike Tyson <b>recieved his order of exclusive gps drones </b>{" "}
                </p>
                <small>2 minutes ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
