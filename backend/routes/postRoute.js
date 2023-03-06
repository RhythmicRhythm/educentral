const express = require("express");
const {
  createPost,
  getPosts,
  getPostUser,
  addComment,
  likePost,
  dislikePost,
} = require("../controllers/postController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/", protect, createPost);
router.get("/getposts", protect, getPosts);
router.get("/getpostuser", protect, getPostUser);
router.post("/addcomment/:id", protect, addComment);
router.post("/likepost/:id", protect, likePost);
router.post("/dislikepost/:id", protect, dislikePost);

module.exports = router;
