const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

//Create Post
const createPost = asyncHandler(async(req, res) => {
   const { desc, userimage, image} = req.body;

        //   Validation
  if ( !desc ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  try {
    // Fetch user from the database
    const user = await User.findById(req.user.id);

    // Create Post with user's name
    const post = await Post.create({
      author: req.user.id,
      name: user.firstname,
      desc,
      userimage,
      image,
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Get all Products
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ author: req.user.id }).sort("-createdAt");
    res.status(200).json(posts);
  });

//    // Get single product
const getPost = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // Log the ID of the user who added the current user
  const posts = await Post.find({ author: user.addedBy }).sort("-createdAt");

  res.status(200).json(posts);
})



 module.exports = {
    createPost,
    getPosts,
    getPost
  };