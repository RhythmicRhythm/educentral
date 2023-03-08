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
    <div>
      hello trying 
    </div>
  )
}

export default Post
