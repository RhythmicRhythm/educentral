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
        <aside style={{ display: isMenuOpen ? 'block' : 'none' }}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2>edu <span className="danger text-black">Central</span></h2>
                </div>
                <div className="close"onClick={handleCloseClick}>
                    X
                </div>
            </div>
               <div className="sidebar">
                {/* Sidebar Links */}
                <div className="anchor-link">
                    <h2>M</h2>
                    <h1>Dashboard</h1>
                </div>
                <div className="anchor-link active">
                    <h2>M</h2>
                    <h1>Dashboard</h1>
                </div>
                <div className="anchor-link">
                    <h2>M</h2>
                    <h1>Dashboard</h1>
                </div>
                <div className="anchor-link">
                    <h2>M</h2>
                    <h1>Dashboard</h1>
                </div>
                <div className="anchor-link">
                    <h2>M</h2>
                    <h1>Dashboard</h1>
                </div>
                {/* Sidebar Links */}
            </div>
        </aside>

        {/* =============== END OF ASIDE===============   */}
        <main>
            <h1>Dashboard</h1>
            <div className="date">
                <input type="date"  /> 
            </div>

            <div className="insight">
                insights
                <div className="">
                    <div className="">
                        Create Post
                    </div>
                    <div className="">
                        
                    </div>
                </div>
            </div>

             {/* =============== END OF INSIGHTS ===============   */}

             <div className="recent-orders">
                <h2>Recent Orders</h2>
                
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Name</th>
                            <th>Product Name</th>
                            <th>Product Name</th>
                          
                         

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                           
                        </tr>
                        <tr>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                           
                        </tr>
                        <tr>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                           
                        </tr>
                          <tr>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            <td>foldable mini</td>
                            
                        </tr>
                    </tbody>
                </table>
             </div>
        </main>

        {/* =========== END OF MAIN ===========  */}
        <div className="right">
            <div className="top">
                <button onClick={handleMenuClick} >
                    M
                </button>
                <div className="profile">
                    <div className="info">
                        <p>Hi, <b>MR John</b></p>
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
                            <p>Mike Tyson <b>recieved his order of exclusive gps drones </b> </p>
                             <small>2 minutes ago</small>
                        </div>
                    </div>
                     <div className="update">
                        <div className="profile-photo">
                            <img src="" alt="" />
                        </div>
                        <div className="messages">
                            <p>Mike Tyson <b>recieved his order of exclusive gps drones </b> </p>
                             <small>2 minutes ago</small>
                        </div>
                    </div>
                     <div className="update">
                        <div className="profile-photo">
                            <img src="" alt="" />
                        </div>
                        <div className="messages">
                            <p>Mike Tyson <b>recieved his order of exclusive gps drones </b> </p>
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
