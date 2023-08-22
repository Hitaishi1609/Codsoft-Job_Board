const express = require("express")
const router = express.Router()

const {jobPost, getAllJobs, getJobDetails, emailNotif} = require("../controllers/Job")
const { isAuthenticated } = require("../middlewares/auth")

router.post("/jobPost", jobPost)
router.get("/jobs-list",getAllJobs)
router.post("/job", getJobDetails)
router.post("/emailNotif", emailNotif)


module.exports = router;    