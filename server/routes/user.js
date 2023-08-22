const express = require("express")
const router = express.Router()

const {login, signup,logout, getMyProfile} = require("../controllers/Auth")
const { authenticateToken } = require("../utils/sendToken")

router.post("/login",login)
router.post("/signup", signup)
router.post("/logout", logout)
router.get("/me",authenticateToken,getMyProfile);

//Testing protected route with single middleware
// router.get("/test", auth, (req,res)=>{
//     res.json({
//         success:true,
//         message: "Welcome to the protected route for Testing"
//     })
// })

module.exports = router;