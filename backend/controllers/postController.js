const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

//Create Post
const createPost = asyncHandler(async (req, res) => {
  const { desc, userimage, image } = req.body;

  //   Validation
  if (!desc) {
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
const getPostUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // Log the ID of the user who added the current user
  const posts = await Post.find({ author: user.addedBy }).sort("-createdAt");

  res.status(200).json(posts);
});

// Get single post
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate({
    path: "comments.user",
    select: "firstname lastname",
  });

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  res.status(200).json(post);
});

// Add comment to post
const addComment = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    res.status(400);
    throw new Error("Please enter a comment");
  }

  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404);
      throw new Error("Post not found");
    }

    const comment = {
      text,
      user: req.user.id,
    };

    post.comments.push(comment);

    await post.save();

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Like Post
const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  // Check if user has already liked the post
  const alreadyLiked = post.likes.find(
    (like) => like.user.toString() === req.user.id
  );
  if (alreadyLiked) {
    // User has already liked the post, so remove the like
    post.likes = post.likes.filter(
      (like) => like.user.toString() !== req.user.id
    );
    res.status(200).json({ message: "Post unliked" });
  } else {
    // User has not liked the post, so add the like
    post.likes.push({ user: req.user.id });
    res.status(200).json({ message: "Post liked" });
  }

  const updatedPost = await post.save();
});

// Dislike Post
const dislikePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }
  
   // Check if user has already disliked the post
   const alreadyDisliked = post.dislikes.find(
    (dislike) => dislike.user.toString() === req.user.id
  );
  if (alreadyDisliked) {
    // User has already disliked the post, so remove the dislike
    post.dislikes = post.dislikes.filter(
      (dislike) => dislike.user.toString() !== req.user.id
    );
    res.status(200).json({ message: "disliked cancelled" });
  } else {
    // User has not disliked the post, so add the dislike
    post.dislikes.push({ user: req.user.id });
    res.status(200).json({ message: "Post disliked" });
  }

  const updatedPost = await post.save();

});

module.exports = {
  createPost,
  getPosts,
  getPostUser,
  getPostById,
  addComment,
  likePost,
  dislikePost,
};
