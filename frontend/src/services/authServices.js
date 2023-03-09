import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = "https://educentral-community-backend.onrender.com";

// export const BACKEND_URL = "http://localhost:5000";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/register`,
      userData,
      { withCredentials: true }
    );
    if (response.statusText === "OK") {
      toast.success("User Registered successfully");
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

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/login`,
      userData
    );
    if (response.statusText === "OK") {
      toast.success("Login Successful...");
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

// Add Post
export const createPost = async(postData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/posts/`,
      postData
    );
    if (response.statusText === "OK") {
      toast.success("post added Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}

// Add Comment
export const addComment = async(postData, postId) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/posts/addcomment/${postId}`,
      postData
    );
    if (response.statusText === "OK") {
      toast.success("post added Successful...");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
}

// Get Login Status
export const getLoginStatus = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/loggedin`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/users/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Get User Profile
export const getUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/getuser`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

// Get Members
export const getMembers = async () => {
  try{
    const response = await axios.get(`${BACKEND_URL}/api/users/getmembers`);
    return response.data.members;
  } catch (error) {
    console.log(error);
  }
}

// Forgot Password
export const addMember = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/addmembers`,
      userData
    );
    toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    
  }
};

// Get All Posts
export const getPosts = async () => {
  try{
    const response = await axios.get(`${BACKEND_URL}/api/posts/getposts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
// Get Posts under Admin
export const getPostUser = async () => {
  try{
    const response = await axios.get(`${BACKEND_URL}/api/posts/getpostuser`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Get Single Post
export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/posts/getpost/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/users/forgotpassword`,
      userData
    );
    toast.success(response.data.message);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    
  }
};

// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      `${BACKEND_URL}/api/users/resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
