import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../services/authServices";

const Post = () => {
  const [post, setPost] = useState(null);

  const params = useParams();
  console.log(params.id);
  const postId = params.id;

  useEffect(() => {
    async function getPostData() {
      const data = await getPostById(postId);
      setPost(data);
      console.log(data);
    }

    console.log(post);

    getPostData();
  }, [postId]);

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {/* Post Details */}
            <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
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
                  <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
                    <picture>
                      <img
                        alt=""
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        src={post?.userimage}
                      />
                    </picture>
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
                    {/* <span className="align-middle">
                      {moment(post.createdAt).format("MMM DD, YYYY")}
                    </span> */}
                  </div>
                </div>
                <h1 className="mb-8 text-xl font-semibold">{post?.desc}</h1>
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
                  name="comment"
                  
                  placeholder="Comment"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  
                  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="email"
                 
                  className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <input
                    
                    type="checkbox"
                    id="storeData"
                    name="storeData"
                    value="true"
                  />
                  <label
                    className="text-gray-500 cursor-pointer"
                    htmlFor="storeData"
                  >
                    Save my name, email in this browser for the next time I
                    comment.
                  </label>
                </div>
              </div>
             
              <div className="mt-8">
                <button
                  
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
              {/* <Comments slug={post.slug} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
