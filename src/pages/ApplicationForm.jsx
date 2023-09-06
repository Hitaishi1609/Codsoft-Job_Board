import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { emailNotif } from "../redux/actions/job";
import { toast } from "react-hot-toast";
import { clearErrorMessage } from "../redux/actions/auth";

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const { loading, message, error } = useSelector((state) => state.job);

  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearErrorMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrorMessage());
    }
  }, [message, loading]);


  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
  });

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const toastId = toast.loading("Loading...")
    dispatch(emailNotif(formData.email, formData.fullname));
    toast.dismiss(toastId)
    toast.success("Application Submitted Successfully")

    // //reset
    setFormData({
      fullname: "",
      email:"",
      gender:"",
      phonenumber:"",
      university:"",
      dob:"",
      resume:""

    })
    

  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="font-bold text-4xl mt-6 ml-80">
        Please Fill the Following Details!
      </h2>
      <form
        className="flex flex-col gap-7 w-9/12 ml-40 mt-4"
        onSubmit={handleOnSubmit}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="fullname" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Full Name<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Enter full name"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            required
            value={formData.fullname}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="gender" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Gender<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="Enter your gender"
            required
            value={formData.gender}
            onChange={handleInputChange}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            {...register("gender")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>
          <input
            type="email"
            name="email"
            required
            id="email"
            placeholder="Enter email address"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Phone Number<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            placeholder="987-654-3210"
            required
            value={formData.phonenumber}
            onChange={handleInputChange}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            {...register("phoneNo", { required: true })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="university" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              University/College Name<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>
          <input
            type="text"
            name="university"
            id="university"
            required
            value={formData.university}
            onChange={handleInputChange}
            placeholder="Enter your university/college name"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            {...register("university")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="dob" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Date of Birth<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>

          <input
            type="date"
            name="dob"
            id="dob"
            required
            value={formData.dob}
            onChange={handleInputChange}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            {...register("dob", {
              required: {
                value: true,
                message: "Please enter your Date of Birth.",
              },
              max: {
                value: new Date().toISOString().split("T")[0],
                message: "Date of Birth cannot be in the future.",
              },
            })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="resume" className="lable-style">
            <p className="text-[1.175rem] text-richblack-900 mb-1 leading-[1.375rem]">
              Upload your Resume<sup className="text-[#ef4444]">*</sup>
            </p>
          </label>

          <input
            type="file"
            name="resume"
            id="resume"
            placeholder="Upload your resume"
            required
            value={formData.resume}
            onChange={handleInputChange}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            {...register("resume")}
          />
        </div>

        <button
          type="submit"
          className="bg-[#ef4444] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 mb-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
