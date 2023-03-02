const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  loginStatus,
  getUser,
  updateUser,
  changePassword,
  addMember,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const router = express.Router();
const protect = require("../middleWare/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/loggedin", loginStatus);
router.get("/getuser", protect, getUser);
router.post("/addmembers", protect, addMember);
router.patch("/changepassword", protect, changePassword);
router.put("/updateuser", protect, updateUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
