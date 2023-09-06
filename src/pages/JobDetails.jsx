import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobDetails } from '../redux/actions/job';
import { useNavigate, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {job}=useSelector(state=>state.job)
  useEffect(() => {
   dispatch(getJobDetails(id))
  }, [])
  
  return (
    
    <div className='w-1/2 ml-80'>
      <table className="table table-bordered mt-6 ">
  
  <tbody>
    <tr>
      <th>Company</th>
      <td>{job?.company}</td>
    </tr>

    <tr>
      <th>Role Title</th>
      <td>{job?.roleTitle}</td>
    </tr>

    <tr>
      <th>Skills Required</th>
      <td>{job?.skills}</td>
    </tr>

    <tr>
      <th>Experience</th>
      <td>{job?.experience}</td>
    </tr>

    <tr>
      <th>Description</th>
      <td>{job?.roleShortDesc}</td>
    </tr>

    <tr>
      <th>Stipend/Package</th>
      <td>{job?.stipend}</td>
    </tr>

    <tr>
      <th>Work Mode</th>
      <td>{job?.workMode}</td>
    </tr>

    <tr>
      <th>Location</th>
      <td>{job?.location}</td>
    </tr>
 
  </tbody>
</table>

<button className='bg-green-800 rounded-full p-2 hover:text-white w-1/2 ml-36 mb-6' 
                  onClick={()=>{navigate('/application-form')}}>
                    Apply
                  </button>


    </div>
  )
}

export default JobDetails
