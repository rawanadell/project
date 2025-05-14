const express =require("express");
const { adminOnly,protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserbyId, deleteUser } = require("../controllers/userController");

const router = express.Router();

//User Management Routes
router.get("/",protect,adminOnly,getUsers);//Get all users (Admin only)
router.get("/:id",protect,getUserbyId);//Get a specific user

module.exports=router;
