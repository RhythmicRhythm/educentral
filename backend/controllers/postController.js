const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

//Create Post
const createPost = asyncHandler(async(req, res) => {
   const {title, desc, image} = req.body;

        //   Validation
  if (!title|| !desc || !image) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // Create Post
  const post = await Post.create({
    author: req.user.id,
    title,
    desc,
    image,
   
  });
  res.status(201).json(post);
});

// Get all Products
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ author: req.user.id }).sort("-createdAt");
    res.status(200).json(posts);
  });



module.exports = {
    createPost,
    getPosts,
  };