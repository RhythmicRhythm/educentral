const express = require("express");
const { createPost, getPosts, getPostUser } = require("../controllers/postController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/", protect, createPost);
router.get("/getposts", protect, getPosts);
router.get("/getpostuser", protect, getPostUser);


module.exports = router;
