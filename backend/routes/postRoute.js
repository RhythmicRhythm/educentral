const express = require("express");
const {createPost} = require("../controllers/postController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();


router.post("/", protect, createPost);


module.exports = router;