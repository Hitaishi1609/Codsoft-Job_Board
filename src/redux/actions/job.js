import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";


export const jobPost =
  (company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "jobPostRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/job/jobPost`,
        { company, roleTitle, skills, experience, roleShortDesc, stipend, workMode, location },
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
          },
          withCredentials: true,
        })
  
      
      console.log("AFTER THEN")
      console.log("DATA", data)

      dispatch({
        type: "jobPostSuccess",
        payload: data,
      });
      console.log("AFTER JOB POST SUCCESS")
    } catch (error) {
      dispatch({
        type: "jobPostFail",
        payload: error.response.data.message,
      });

      if (error.response) {
        console.log('Response Error Data:', error.response.data);
        console.log('Response Error Status:', error.response.status);
        console.log('Response Error Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request Error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
  
    }
  };



export const getAllJobs = () => async (dispatch) => {
    try {
      dispatch({
        type: "getAllJobsRequest",
      });

      
      const {data} = await axios.get(`${BASE_URL}/job/jobs-list`)
      dispatch({
        type: "getAllJobsSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "getAllJobsFail",
        payload: error.response.data.message,
      });
    }
  };
  


  export const getJobDetails = (id) =>  async (dispatch) => {
    try {
      dispatch({
        type: "getJobDetailsRequest",
      });      
      const {data} = await axios.post(`${BASE_URL}/job/job`, {id}, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8'
        },
        withCredentials: true,
      })

      dispatch({
        type: "getJobDetailsSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "getJobDetailsFail",
        payload: error.response.data.message,
      });
    }
  };



  export const emailNotif =
  (email,name) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "emailNotifRequest",
      });

      const { data } = await axios.post(
        `${BASE_URL}/job/emailNotif`,{email,name},
        {
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
          },
          withCredentials: true,
        }
        )
      dispatch({
        type: "emailNotifSuccess",
        payload: data,
      });
      console.log("AFTER EMAIL NOTIF SUCCESS")
    } catch (error) {
      dispatch({
        type: "emailNotifFail",
        payload: error.response.data.message,
      });

      if (error.response) {
        console.log('Response Error Data:', error.response.data);
        console.log('Response Error Status:', error.response.status);
        console.log('Response Error Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request Error:', error.request);
      } else {
        console.log('Error:', error.message);
      }
  
    }
  };