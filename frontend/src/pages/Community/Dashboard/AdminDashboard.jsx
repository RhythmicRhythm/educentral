import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { bubble2 } from "react-icons-kit/icomoon/bubble2";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import { share2 } from "react-icons-kit/icomoon/share2";
import { toast } from "react-toastify";
import moment from "moment";
import WebFont from "webfontloader";
import { timesOutline } from "react-icons-kit/typicons/timesOutline";
import {
  getPosts,
  createPost,
  likePost,
  dislikePost,
  getUser,
} from "../../../services/authServices";
import { pen_3 } from "react-icons-kit/ikons/pen_3";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const initialState = {
  desc: "",
};

const AdminDashboard = () => {
  useRedirectLoggedOutUser("/login");

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

      setUserId(data._id);
    }
    getUserData();
  }, []);

  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 sm:px-16">
            <div className="relative w-[30rem] p-4 sm:p-8 bg-white shadow-lg rounded-lg">
              <div
                onClick={() => setShowModal(false)}
                className="absolute right-0 px-8 cursor-pointer"
              >
                <h1 className="text-gray-600">
                  <Icon icon={timesOutline} size={25} />
                </h1>
              </div>
              {/*content*/}
              <form onSubmit={createpost} className=" w-full mt-6">
                <div className="pb-2 pt-4 text-left">
                  <label className="font-bold text-gray-700 text-sm">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    value={desc}
                    placeholder="What's Happening?"
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="pb-2 pt-2 text-left flex flex-col">
                  <label className="font-bold text-gray-700 text-sm mb-2">
                    Add Image
                  </label>
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
                </div>

                <div className="flex justify-between">
                  <div className="">
                    <button
                      disabled={isDescEmpty}
                      type="submit"
                      className="transition duration-500 ease bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 
                      hover:from-blue-900 hover:to-pink-600
                      text-lg font-semibold rounded-lg text-white px-3 py-1 cursor-pointer"
                    >
                      Add Post
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div
        onClick={() => setShowModal(true)}
        className="fixed bottom-0 right-0 mb-6 mr-6 w-10 h-10 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 rounded-full cursor-pointer"
      >
        <h1 className="text-gray-200 font-bold text-2xl">
          <Icon icon={pen_3} size={17} />
        </h1>
      </div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        <div className="w-[25rem] md:w-[45rem]">
          <div className="p-6">
            {posts.map((item) => (
              <div className="border-2 border-gray-300 ">
                <Link
                  to={`/dashboard/${item._id}`}
                  key={item._id}
                  className="flex flex-col gap-2 justify-start mt-2"
                >
                  <div className="px-2">
                    <img
                      className="rounded-full w-10"
                      src={item.userimage}
                      alt=""
                    />
                  </div>
                  <div className="text-left px-2">
                    <div className="flex gap-2">
                      <h1 className="font-bold text-gray-700 text-sm">
                        {item.name}
                      </h1>
                    </div>
                    <h1 className="font-medium text-gray-500 text-xs">
                      description description description
                    </h1>
                    <p className="text-gray-600 text-xs font-semibold">
                      {" "}
                      {moment(item.createdAt).fromNow()}{" "}
                    </p>
                    <div className="">
                      <pre
                        className="text-sm text-gray-500 mt-2"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {item.desc.length > 100
                          ? `${item.desc.substring(0, 100)}`
                          : item.desc}
                        <span className="text-purple-800 text-sm">
                          {" "}
                          read more ....
                        </span>
                      </pre>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <img className="w-auto" src={item.image} alt="" />
                  </div>
                </Link>
                <div className="text-gray-400 text-[.70rem] flex justify-between px-4 py-1 border-b-2 border-gray-100">
                  <div className="flex gap-2">
                    <div className="">{item ? item.likesCount : 0} likes </div>
                    <div className="">
                      {item ? item.dislikesCount : 0} dislikes{" "}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="">
                      {item ? item.comments.length : 0} Comments{" "}
                    </div>
                  </div>
                </div>
                <div className="unaffect text-black flex justify-between px-4 py-1">
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 className="text-xs" onClick={() => likepost(item._id)}>
                      <Icon
                        className="mr-1"
                        icon={ic_thumb_up_outline}
                        size={18}
                      />
                      Like
                    </h1>
                  </div>
                  <div className="flex gap-2 text-gray-400 cursor-pointer border-r-2 border-gray-100">
                    {" "}
                    <h1
                      className="text-xs"
                      onClick={() => dislikepost(item._id)}
                    >
                      <Icon
                        className="mr-1"
                        icon={ic_thumb_down_outline}
                        size={18}
                      />
                      Dislike
                    </h1>
                  </div>
                  <Link
                    to={`/dashboard/${item._id}`}
                    className="flex gap-2 text-gray-400 cursor-pointer"
                  >
                    {" "}
                    <h1 className="text-xs">
                      <Icon className="mr-1" icon={bubble2} size={16} />
                      Comment
                    </h1>
                  </Link>
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 className="text-xs">
                      <Icon className="mr-1" icon={share2} size={16} />
                      Share
                    </h1>
                    {/* <h1 className="text-lg">{post ? post.likesCount : 0}</h1> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
