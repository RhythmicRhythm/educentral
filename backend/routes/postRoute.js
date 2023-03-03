const express = require("express");
const { createPost, getPosts, getPost } = require("../controllers/postController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/", protect, createPost);
router.get("/getposts", protect, getPosts);
router.get("/getpost", protect, getPost);


module.exports = router;
