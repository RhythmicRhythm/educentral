const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/", protect, createPost);
router.get("/getposts", protect, getPosts);

module.exports = router;
