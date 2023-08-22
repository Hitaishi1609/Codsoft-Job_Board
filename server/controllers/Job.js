const { notifyEmail } = require("../mail/Template")
const Job = require("../models/Job")
const User = require("../models/User")
const mailSender = require("../utils/mailSender")


//function to post a new job
exports.jobPost = async (req, res) => {
    try {
        console.log("INSIDE TRY")
  
      let { company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location} = req.body

  
      // Check if any of the required fields are missing
      if (
        !company ||
        !roleTitle ||
        !skills ||
        !experience ||
        !roleShortDesc ||
        !stipend ||
        !workMode ||
        !location
      ) {
        return res.status(400).json({
          success: false,
          message: "All Fields are Mandatory",
        })
      }
      

      console.log("BEFORE POSTING")
      // Create a new job with the given details
      const newJob = await Job.create({
        company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location
      })

      console.log("AFTER POSTING")

      await newJob.save();
  
      
      // Return the new job and a success message
      res.status(200).json({
        success: true,
        data: newJob,
        message: "Job Posted Successfully",
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        success: false,
        message: "Failed to Post Job",
        error: error.message,
      })
    }
  }


// Get Jobs List
exports.getAllJobs = async (req, res) => {
    try {
      const allJobs = await Job.find();
      if(!allJobs){
        return res.status(400).json({
          success:false,
          message:"No Jobs Found"
        })
      }
      res.status(200).json({
        success: true,
        jobs: allJobs,
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: `Can't Fetch Jobs Data`,
      })
    }
  }


// //Get one single Job
exports.getJobDetails = async (req, res) => {
  try {
    const {id}  = req.body
    const jobDetails = await Job.findById(id);
      
    
    if (!jobDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find job`,
      })
    }

    res.status(200).json({
      success: true,
      job: jobDetails,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    })
  }
}


exports.emailNotif = async (req, res) => {
  // Send notification email
  const {email,name}=req.body;
  try {
    if(!email || !name){
      return res.status(500).json({success:false,message:"Fields are required"})
    }
    await mailSender(
      email,
      "Application Submitted Successfully",
      notifyEmail (name)
    )
    res.status(200).json({ success : true,message:'Mail Sent Successfully'})
  } catch (error) {
    console.error("Error occurred while sending email:", error)
    return res.status(500).json({
      success: false,
      message: "Error occurred while sending email",
      error: error.message,
    })
  }
}


