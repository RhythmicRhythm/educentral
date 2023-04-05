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
      <div className="mb-4 grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-3">
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
                      <button type="submit" disabled={isDescEmpty}>
                        <img
                          className="w-8"
                          src="https://img.icons8.com/stickers/256/paper-plane.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className=""></div>
                  </div>
                </form>
              </div>
              <div className=""></div>
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
                      <h1 className="text-sm text-gray-700 font-bold">
                        {" "}
                        {item.name}
                      </h1>
                      <h2 className="text-xs text-gray-500 font-semibold">
                        description description
                      </h2>
                      <p className="text-xs text-gray-400">
                        {moment(item.createdAt).fromNow()}{" "}
                      </p>
                    </div>
                  </div>

                  <pre
                    className="text-sm text-gray-500 mt-2"
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item.desc.length > 100
                      ? `${item.desc.substring(0, 100)}`
                      : item.desc}

                    <span className="text-blue-500 px-2">
                      <Link to={`/home/${item._id}`}>See more</Link>
                    </span>
                  </pre>

                  <img className="rounded-lg" src={item.image} alt="" />

                  <div className="mt-4 flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <div
                        onClick={() => likepost(item._id)}
                        className="flex flex-row cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-blue-600"
                        >
                          <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                        </svg>
                        <h1 className="text-xs mt-1">
                          {item ? item.likesCount : 0} like
                        </h1>
                      </div>
                      <div
                        onClick={() => dislikepost(item._id)}
                        className="flex flex-row cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-blue-600"
                        >
                          <path d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z" />
                        </svg>

                        <h1 className="text-xs mt-1">
                          {item ? item.dislikesCount : 0} disike
                        </h1>
                      </div>
                    </div>
                    <Link
                      to={`/home/${item._id}`}
                      className="flex flex-row
                "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <h1 className="text-xs mt-1">
                        {item ? item.comments.length : 0} Comments
                      </h1>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 ">
          <div className="relative lg:sticky top-8">gymaihrnbibymfau</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
