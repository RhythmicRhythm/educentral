import React from 'react';
import {Link} from "react-router-dom";

const PostHeader = () => {
  return (
    <div>
       <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            <Link to="/">
              <span className="cursor-pointer text-gray-600 font-bold text-2xl ">
                eduCENTRAL </span>
            </Link>
          </div>
          <div className="hidden md:float-left md:contents">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
