const express = require("express");
const { registerUser, loginUser, logoutUser, loginStatus, changePassword, forgotPassword, resetPassword } = require("../controllers/userController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");



router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/loggedin", loginStatus);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);



module.exports = router;