const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema(
    {

        company:{
            type:String,
            required:true,
        },
        roleTitle:{
            type:String,
            required:true,
        },
        skills:{
            type:String,
            required:true,
        },
        experience:{
            type:Number,
            required:true
        },
        roleShortDesc:{
            type:String,
            required:true
        },
        stipend:{
            type:Number,
            required:true
        },
        workMode:{
            type:String,
            required:true
        },
        location:{
            type:String,
            required:true
        }
        
    }
)

module.exports = mongoose.model("Job", jobSchema)