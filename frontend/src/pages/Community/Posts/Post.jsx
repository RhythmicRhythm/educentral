import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import parse from "html-react-parser";
import PostHeader from "../../../components/Header/PostHeader";
import Icon from "react-icons-kit";
import { ic_arrow_right } from "react-icons-kit/md/ic_arrow_right";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import {
  addComment,
  likePost,
  dislikePost,
  getPostById,
  addReply,
  getUser,
} from "../../../services/authServices";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const initialState = {
  text: "",
  rreplyText: "",
};

const Post = () => {
  useRedirectLoggedOutUser("/login");

  const [post, setPost] = useState(null);
  const [isOpen, setIsOpen] = useState({});
  const [profile, setProfile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [showReplyForm, setShowReplyForm] = useState({});
  const [formData, setformData] = useState(initialState);
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [replyData, setreplyData] = useState(initialState);
  const [isReplyEmpty, setIsReplyEmpty] = useState(true);

  const params = useParams();
  const postId = params.id;
  const { text } = formData;
  const { replyText } = replyData;
  let commentsId = null;

  const handleClick = (commentId) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const handleReplyClick = (commentId) => {
    commentsId = commentId;

    setShowReplyForm((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  const handleReplyChange = (e) => {
    const { name, value } = e.target;
    setreplyData({ ...replyData, [name]: value });
    setIsReplyEmpty(value.trim() === "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    setIsFormEmpty(value.trim() === "");
  };

  const addcomment = async (e) => {
    e.preventDefault();

    const postData = {
      text,
    };

    try {
      const data = await addComment(postData, postId);

      const updatedPost = await getPostById(postId);
      setPost(updatedPost);
      setformData({ ...formData, text: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const likepost = async () => {
    // Check if the user has already disliked the post
    if (post.dislikes.some((dislike) => dislike.user === userId)) {
      //  User has already disliked the post, decrement the dislikesCount
      setPost((prevPost) => ({
        ...prevPost,
        dislikesCount: prevPost.dislikesCount - 1,
      }));
    }

    // Check if the user has already liked the post
    if (post.likes.some((like) => like.user === userId)) {
      //  User has already liked the post, decrement the likesCount
      setPost((prevPost) => ({
        ...prevPost,
        likesCount: prevPost.likesCount - 1,
      }));
    } else {
      //  User has not liked the post, increment the likesCount
      setPost((prevPost) => ({
        ...prevPost,
        likesCount: prevPost.likesCount + 1,
      }));
    }

    try {
      const data = await likePost(postId);

      const updatedPost = await getPostById(postId);
      setPost(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };

  const dislikepost = async () => {
    // Check if the user has already liked the post
    if (post.likes.some((like) => like.user === userId)) {
      //  User has already liked the post, decrement the likesCount
      setPost((prevPost) => ({
        ...prevPost,
        likesCount: prevPost.likesCount - 1,
      }));
    }

    // Check if the user has already disliked the post
    if (post.dislikes.some((dislike) => dislike.user === userId)) {
      //  User has already disliked the post, decrement the dislikesCount
      setPost((prevPost) => ({
        ...prevPost,
        dislikesCount: prevPost.dislikesCount - 1,
      }));
    } else {
      //  User has not disliked the post, increment the dislikesCount
      setPost((prevPost) => ({
        ...prevPost,
        dislikesCount: prevPost.dislikesCount + 1,
      }));
    }

    try {
      const data = await dislikePost(postId);

      const updatedPost = await getPostById(postId);
      setPost(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };

  const addreply = async (e, commentId) => {
    e.preventDefault();

    const replyData = {
      replyText,
    };

    try {
      const data = await addReply(replyData, postId, commentId);
      const updatedPost = await getPostById(postId);
      setPost(updatedPost);
      setreplyData({ ...formData, replyText: "" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPostData() {
      const data = await getPostById(postId);
      setPost(data);
    }
    getPostData();
  }, [postId]);

  useEffect(() => {
    async function getUserData() {
      const data = await getUser();

      setProfile(data);

      setUserId(data._id);
    }
    getUserData();
  }, []);

  return (
    <>
      <PostHeader />
      <div className="container mx-auto px-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {/* Post Details */}
            <div className="bg-white shadow-lg rounded-lg lg:p-8 mb-8">
              <div className="relative overflow-hidden shadow-md mb-6">
                <picture>
                  <img
                    src={post?.image}
                    alt=""
                    className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
                  />
                </picture>
              </div>

              <div className="px-4 lg:px-0">
                <div className="flex items-center mb-8 w-full">
                  <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-4 items-center">
                    <img
                      alt=""
                      height="30px"
                      width="30px"
                      className="align-middle rounded-full"
                      src={post?.userimage}
                    />

                    <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                      {post?.name}
                    </p>
                  </div>
                  <div className="font-semibold text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline mr-2 text-pink-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-600 font-semibold align-middle text-xs">
                      {moment(post ? post.createdAt : 0).format("MMM DD, YYYY")}
                    </span>
                  </div>
                </div>
                <h1 className="mb-8 text-sm text-gray-600 font-medium">
                  <pre style={{ whiteSpace: "pre-wrap" }}>{post?.desc}</pre>
                </h1>
              </div>
              <div className="px-8">
                <div className="flex mt-6 gap-6 border-t border-blue-400 p-6">
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 onClick={likepost}>
                      <Icon icon={ic_thumb_up_outline} size={25} />
                    </h1>
                    <h1 className="text-lg">{post ? post.likesCount : 0}</h1>
                  </div>

                  <div className="flex gap-2  text-gray-400 cursor-pointer">
                    {" "}
                    <h1 onClick={dislikepost}>
                      <Icon icon={ic_thumb_down_outline} size={25} />
                    </h1>
                    <h1 className="text-lg">{post ? post.dislikesCount : 0}</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Post Details */}

            {/* Comments Form */}
            <div className="bg-white shadow-lg rounded-lg p-4 pb-12 mb-8">
              <h3 className="text-xl text-gray-700 mb-8 font-bold border-b pb-4">
                Leave a Reply
              </h3>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                  className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  type="text"
                  name="text"
                  id="desc"
                  value={text}
                  placeholder="Comment"
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-8">
                <button
                  disabled={isFormEmpty}
                  onClick={addcomment}
                  type="button"
                  className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
            </div>
            {/* Comments Form */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {/* comments */}
              <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h3 className="text-xl mb-8 text-gray-700 font-bold border-b pb-4">
                  {post ? post.comments.length : 0} Comments
                </h3>
                {post &&
                  post.comments &&
                  post.comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="border-b border-gray-200 mb-4 pb-4 text-left"
                      // ref={commentBoxRef}
                    >
                      <h1 className="mb-2">
                        <span className="font-bold text-gray-800 text-lg">
                          {comment.user.firstname}
                        </span>{" "}
                        {/* on {moment(comment.createdAt).format("MMM DD, YYYY")} */}
                      </h1>
                      <p className="font-medium text-gray-700 w-full">
                        {parse(comment.text)}
                      </p>
                      <div className="flex gap-4 mt-2 w-full cursor-pointer">
                        <p className="text-xs font-semibold text-gray-500">
                          {moment(comment.createdAt).fromNow()}
                        </p>
                        <p
                          onClick={() => handleReplyClick(comment._id)}
                          className="text-xs font-bold text-gray-600"
                        >
                          Reply
                        </p>
                      </div>

                      <div className="text-left p-2 ml-4">
                        <div
                          onClick={() => handleClick(comment._id)}
                          className=" flex cursor-pointer"
                        >
                          <h1 className="text-gray-700 text-sm font-bold mt-1">
                            {" "}
                            view {comment.replies &&
                              comment.replies.length}{" "}
                            replies
                          </h1>

                          <div className=" text-gray-600">
                            {!isOpen[comment._id] ? (
                              <h1 className="">
                                <Icon icon={ic_arrow_right} size={20} />
                              </h1>
                            ) : (
                              <h1 className="">
                                <Icon icon={ic_arrow_drop_down} size={20} />
                              </h1>
                            )}
                          </div>
                        </div>
                        {isOpen[comment._id] && (
                          <div
                            // ref={replyFormRef}
                            className="mt-2  transition duration-500 ease-in flex flex-col"
                          >
                            {comment.replies.map((reply) => (
                              <div key={reply._id} className="mt-2">
                                <h1 className="font-bold text-gray-800 text-sm">
                                  {reply.user.firstname}
                                </h1>
                                <p className="font-medium text-sm text-gray-600 w-full">
                                  {parse(reply.replyText)}
                                </p>
                                <p className="font-semibold text-gray-500 text-xs mt-1">
                                  {moment(reply.createdAt).fromNow()}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <form
                        onSubmit={(e) => addreply(e, comment._id)}
                        className={`w-full mt-6 ${
                          showReplyForm[comment._id] ? "" : "hidden"
                        }`}
                      >
                        <div className="pb-2 pt-4 text-left">
                          <label className="font-bold text-gray-700 text-sm">
                            add Reply
                          </label>
                          <textarea
                            type="text"
                            name="replyText"
                            id="reply"
                            value={replyText}
                            placeholder="Input your reply"
                            className="form-input"
                            onChange={handleReplyChange}
                          />
                        </div>

                        <div className="flex justify-between">
                          <div className="">
                            <button
                              disabled={isReplyEmpty}
                              type="submit"
                              className="transition duration-500 ease bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 
                              hover:from-blue-900 hover:to-pink-600 text-xs font-semibold rounded-lg text-white px-2 py-1 cursor-pointer"
                            >
                              Add Reply
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  ))}
              </div>
              {/* comments */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
