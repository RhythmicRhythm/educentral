import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../services/authServices";
import moment from "moment";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import PostHeader from "../../../components/Header/PostHeader";
import Icon from "react-icons-kit";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import { addComment } from "../../../services/authServices";

const initialState = {
  text: "",
};

const Post = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [formData, setformData] = useState(initialState);
  const params = useParams();
  const postId = params.id;
  const { text } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const addcomment = async (e) => {
    e.preventDefault();

    console.log("clicked");

    const postData = {
      text,
    };

    try {
      const data = await addComment(postData, postId);
      console.log(data);
    //   toast.success("post added Successful...");
      //   setPosts([data, ...posts]);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function getPostData() {
      const data = await getPostById(postId);
      setPost(data);
      console.log(data);
    }
    getPostData();
  }, [postId]);

  return (
    <>
      <PostHeader />
      <div className="container mx-auto px-10 mb-8">
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
                  <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
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
                  <div className="font-medium text-gray-700">
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
                    <span className="align-middle">
                      {moment(post ? post.createdAt :0).format("MMM DD, YYYY")}
                    </span>
                  </div>
                </div>
                <h1 className="mb-8 text-xl font-semibold">{post?.desc}</h1>
              </div>
              <div className="px-8">
                <div className="flex mt-6 gap-6 border-t border-blue-400 p-6">
                  <div className="flex gap-2 text-xs text-gray-400 cursor-pointer">
                    {" "}
                    <h1>
                      <Icon icon={ic_thumb_up_outline} size={20} />
                    </h1>
                    <h1 className="">{post ? post.likesCount : 0}</h1>
                  </div>

                  <div className="flex gap-2 text-xs text-gray-400 cursor-pointer">
                    {" "}
                    <h1>
                      <Icon icon={ic_thumb_down_outline} size={20} />
                    </h1>
                    <h1 className="">{post ? post.dislikesCount : 0}</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Post Details */}

            {/* Comments Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
              <h3 className="text-xl mb-8 font-semibold border-b pb-4">
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
                <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                  {post ? post.comments.length : 0} Comments
                </h3>
                {post &&
                  post.comments &&
                  post.comments.map((comment) => (
                    <div
                      key={comment._id}
                      className="border-b border-gray-100 mb-4 pb-4"
                    >
                      <p className="mb-4">
                        <span className="font-semibold">
                          {comment.user.firstname}
                        </span>{" "}
                        on {moment(comment.createdAt).format("MMM DD, YYYY")}
                      </p>
                      <p className="whitespace-pre-line text-gray-600 w-full">
                        {parse(comment.text)}
                      </p>
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
