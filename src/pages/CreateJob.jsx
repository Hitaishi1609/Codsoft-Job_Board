import { useForm } from "react-hook-form"
import React, { useEffect, useState } from 'react'
import {toast} from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { clearErrorMessage, signup } from "../redux/actions/auth"
import { useNavigate } from 'react-router-dom';
import { jobPost } from "../redux/actions/job"


const CreateJob = () => {

    const {register} = useForm()

    const {loading, success, message, error} = useSelector(state => state.job)
    const navigate = useNavigate();
    
  
      useEffect(()=>{
          if(message){
              toast.success(message)
              dispatch(clearErrorMessage())
              navigate("/")
          }
          if(error){
              toast.error(error)
              dispatch(clearErrorMessage())
          }
  
      }, [success])
  
    const dispatch = useDispatch();
  
      const [formData, setFormData] = useState( {
        company:"",
        roleTitle:"",
        skills:"",
        experience:"",
        roleShortDesc:"",
        stipend:"",
        workMode:"",
        location:""
      })

      const { company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location } = formData
  
    
  
    function changeHandler(event) {
  
      setFormData( (prevData) =>(
          {
              ...prevData,
              [event.target.name]:event.target.value
          }
      ) )
  
  }
  
    function submitHandler(event) {
      event.preventDefault();
      console.log("Printing the formData ");
      console.log(formData)
      dispatch(jobPost(company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location))

    // Reset
    setFormData({
        company:"",
        roleTitle:"",
        skills:"",
        experience:"",
        roleShortDesc:"",
        stipend:"",
        workMode:"",
        location:""
    })
  
  }
 
return (

    <div className='w-10/12'>
        <form
            onSubmit={submitHandler}
            className="space-y-6 p-6 flex flex-col ml-60"
    >

    {/* Company name */}
    <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="company">
          Company Name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="company"
          placeholder="Enter Company Title"
          {...register("company", { required: true })}
          value = {formData.company}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>


      {/* Role Title */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="roleTitle">
          Role/Profile Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="roleTitle"
          placeholder="Enter Role/Profile Title"
          {...register("roleTitle", { required: true })}
          value = {formData.roleTitle}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
        
      </div>

      {/* Skills Required */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="skills">
          Skills Required <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="skills"
          placeholder="Enter the skills required"
          {...register("skills", { required: true })}
          value = {formData.skills}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>

      {/* Location */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="location">
          Location <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="location"
          placeholder="Enter the Job Location"
          {...register("location", { required: true })}
          value = {formData.location}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>

      {/* Experience */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="experience">
          Experience (in no. of years)<sup className="text-pink-200">*</sup>
        </label>
        <input
          type='number'
          id="experience"
          placeholder="Enter Experience Required"
          {...register("experience", { required: true })}
          value = {formData.experience}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>

      {/* Job Short Description */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="roleShortDesc">
          Job Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="roleShortDesc"
          placeholder="Enter Description"
          {...register("roleShortDesc", { required: true })}
          value = {formData.roleShortDesc}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] resize-x-none min-h-[130px]'
        />
        
      </div>

      

      {/* Stipend/Package */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="Stipend/Package">
          Stipend/Package <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="Stipend/Package"
          placeholder="Enter Stipend/Package"
          {...register("stipend", { required: true })}
          value = {formData.stipend}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>

      {/* Work Mode */}
      <div className="flex flex-col space-y-2">
        <label className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]' htmlFor="workMode">
          Work Mode <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="workMode"
          placeholder="Enter the Work Mode"
          {...register("workMode", { required: true })}
          value = {formData.workMode}
          onChange={changeHandler}
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        />
      </div>

        <button type="submit" className=' w-full bg-[#ef4444] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Post Job
        </button>

    </form>
    </div>
  )

}

export default CreateJob
