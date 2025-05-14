const express=require("express");
const { registerUser, loginUser, getUserprofile, updateUserprofile } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const router = express.Router();

//Auth Routes
router.post("/register",registerUser); // Register User
router.post("/login",loginUser);// Login User
router.get("/profile",protect,getUserprofile); //Get User Profile
router.put("/profile",protect,updateUserprofile); //Update profile

router.post("/upload-image",upload.single("image"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"No files uploaded"});
    }
    const imageUrl =`${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
    }`;
    res.status(200).json({imageUrl});
});


module.exports = router;
