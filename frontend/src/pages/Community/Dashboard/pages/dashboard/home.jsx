import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, CardHeader, CardBody } from "@material-tailwind/react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import moment from "moment";

import {
  getPosts,
  createPost,
  likePost,
  dislikePost,
  getUser,
} from "../../../../../services/authServices";
// import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
const initialState = {
  desc: "",
};

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formData, setformData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);
  const [postImage, setPostImage] = useState("");
  const [isDescEmpty, setIsDescEmpty] = useState(true);
  const { desc } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    setIsDescEmpty(value.trim() === "");
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const createpost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("desc", desc);

    postData.append("image", postImage);

    console.log(...postData);
    console.log("clicked");

    try {
      const data = await createPost(postData);
      console.log(data);

      setPosts([data, ...posts]);
      setShowModal(false);
      setformData({ ...formData, desc: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const likepost = async (postId) => {
    // Find the index of the post with the given postId
    const postIndexToUpdate = posts.findIndex((post) => post._id === postId);

    if (
      posts[postIndexToUpdate].dislikes.some(
        (dislike) => dislike.user === userId
      )
    ) {
      // User has already disliked the post, decrement the dislikesCount
      posts[postIndexToUpdate].dislikesCount =
        posts[postIndexToUpdate].dislikesCount - 1;
    }

    if (posts[postIndexToUpdate].likes.some((like) => like.user === userId)) {
      // User has already liked the post, decrement the likesCount
      posts[postIndexToUpdate].likesCount =
        posts[postIndexToUpdate].likesCount - 1;
    } else {
      // User has not liked the post, increment the likesCount
      posts[postIndexToUpdate].likesCount =
        posts[postIndexToUpdate].likesCount + 1;
    }
    // Create a new array with the updated post
    const updatedPosts = [...posts];
    updatedPosts[postIndexToUpdate] = posts[postIndexToUpdate];

    // Update the state with the new array
    setPosts(updatedPosts);

    try {
      const data = await likePost(postId);

      const updatedPost = await getPosts();
      setPosts(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };

  const dislikepost = async (postId) => {
    console.log("Post Disliked....");

    // Find the index of the post with the given postId
    const postIndexToUpdate = posts.findIndex((post) => post._id === postId);

    console.log(posts[postIndexToUpdate]);

    if (posts[postIndexToUpdate].likes.some((like) => like.user === userId)) {
      console.log("remove like");
      // User has already liked the post, decrement the likesCount
      posts[postIndexToUpdate].likesCount =
        posts[postIndexToUpdate].likesCount - 1;
    }

    if (
      posts[postIndexToUpdate].dislikes.some(
        (dislike) => dislike.user === userId
      )
    ) {
      console.log("userExist");
      // User has already disliked the post, decrement the dislikesCount
      posts[postIndexToUpdate].dislikesCount =
        posts[postIndexToUpdate].dislikesCount - 1;
    } else {
      console.log("userNotExist");
      // User has not disliked the post, increment the dislikesCount
      posts[postIndexToUpdate].dislikesCount =
        posts[postIndexToUpdate].dislikesCount + 1;
    }
    // Create a new array with the updated post
    const updatedPosts = [...posts];
    updatedPosts[postIndexToUpdate] = posts[postIndexToUpdate];

    // Update the state with the new array
    setPosts(updatedPosts);

    console.log(postId);
    try {
      const data = await dislikePost(postId);
      console.log(data);
      const updatedPost = await getPosts();
      setPosts(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPostData() {
      const data = await getPosts();

      setPosts(data);
    }
    getPostData();
  }, []);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();

      setProfile(data);
      console.log(data);
      console.log(profile);

      setUserId(data._id);
    }
    getUserData();
  }, []);

  return (
    <div className="mt-8 md:px-20">
      <div className="mb-4 grid grid-cols-1 gap-6 lg:grid-cols-3 xl:grid-cols-3">
        <div className="overflow-hidden lg:col-span-2 xl:col-span-2">
          <div className="insight bg-white p-4 rounded-lg shadow mt-6">
            <div className="">
              <div className="">
                <h2 className="text-sm text-gray-600 font-bold">Create Post</h2>
                <form
                  onSubmit={createpost}
                  className=" w-full mt-6 text-sm text-gray-500"
                >
                  <div className="pb-2 pt-4 text-left">
                    <textarea
                      type="text"
                      name="desc"
                      id="desc"
                      value={desc}
                      placeholder="What's on your mind?"
                      className="form-input-d"
                      onChange={handleInputChange}
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
                      onChange={handleImageChange}
                    />
                    <div className="">
                      <button 
                      type="submit"
                      disabled={isDescEmpty}
                      >
                      <img
                        className="w-8"
                        src="https://img.icons8.com/stickers/256/paper-plane.png"
                        alt=""
                      />
                      </button>
                     
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
                <div>
                  <img
                    className="w-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt=""
                  />
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

            <div className="mt-4 flex flex-row justify-between">
              <div className="flex flex-row gap-4">
                <div className="flex flex-row">
                  <img
                    className="w-6"
                    src="https://img.icons8.com/stickers/256/facebook-like-skin-type-3.png"
                    alt=""
                  />
                  <h1 className="text-xs mt-1">2.5k Likes</h1>
                </div>
                <div
                  className="flex flex-row
                "
                >
                  <img
                    className="w-6"
                    src="https://img.icons8.com/stickers/100/000000/comments--v1.png"
                    alt=""
                  />
                  <h1 className="text-xs mt-1">97 Comments</h1>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <img
                  className="w-6"
                  src="https://img.icons8.com/stickers/256/share.png"
                  alt=""
                />
                <h1 className="text-xs mt-1">27 Shares</h1>
              </div>
            </div>
          </div>

          <div className="">
            {posts.map((item) => (
              <div
                key={item._id}
                className=" bg-white p-4 rounded-lg shadow mt-6"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row gap-4">
                    <div>
                      <img
                        className="w-10 rounded-full"
                        src={item.userimage}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1 className="text-sm text-gray-600"> {item.name}</h1>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>

                  <pre
                    className="text-sm text-gray-500 mt-2"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item.desc.length > 100
                      ? `${item.desc.substring(0, 100)}`
                      : item.desc}

                    <span className="text-blue-400">
                      <Link to={`/home/${item._id}`}>See more</Link>
                    </span>
                  </pre>

                  <img className="rounded-lg" src={item.image} alt="" />

                  <div className="mt-4 flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <div onClick={() => likepost(item._id)} className="flex flex-row cursor-pointer">
                        <img
                          className="w-6"
                          src="https://img.icons8.com/stickers/256/facebook-like-skin-type-3.png"
                          alt=""
                        />
                        <h1 className="text-xs mt-1">{item ? item.likesCount : 0} Likes</h1>
                      </div>
                      <div
                        className="flex flex-row
                "
                      >
                        <img
                          className="w-6"
                          src="https://img.icons8.com/stickers/100/000000/comments--v1.png"
                          alt=""
                        />
                        <h1 className="text-xs mt-1">{item ? item.comments.length : 0} Comments</h1>
                      </div>
                    </div>
                    <div className="flex flex-row gap-1">
                      <img
                        className="w-6"
                        src="https://img.icons8.com/stickers/256/share.png"
                        alt=""
                      />
                      <h1 className="text-xs mt-1">27 Shares</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
        </div>
      </div>
    </div>
  );
}

export default Home;
