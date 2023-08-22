import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"


const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    try {
      console.log("Form Submitted")
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="flex flex-col gap-7 w-9/12 ml-40"
      onSubmit={handleSubmit(submitContactForm)}
    >
    <h2 className='font-bold text-4xl mt-6 ml-80'>Get in Touch with Us</h2>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[49%]">
          <label htmlFor="firstname" className="lable-style">
            <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                First Name<sup className='text-[#ef4444]'>*</sup>
            </p>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            {...register("firstname", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[49%]">
          <label htmlFor="lastname" className="lable-style">
            <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
                Last Name<sup className='text-[#ef4444]'>*</sup>
            </p>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
              Email Address<sup className='text-[#ef4444]'>*</sup>
          </p>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          {...register("email", { required: true })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
              Phone Number<sup className='text-[#ef4444]'>*</sup>
          </p>
        </label>
        <input
          type="number"
          name="phonenumber"
          id="phonenumber"
          placeholder="987-654-3210"
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          {...register("phoneNo", { required: true })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          <p className='text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]'>
              Message<sup className='text-[#ef4444]'>*</sup>
          </p>
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
          {...register("message", { required: true })}
        />
      </div>

      <button
        type="submit"
        className='bg-[#ef4444] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 mb-6'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactUs
