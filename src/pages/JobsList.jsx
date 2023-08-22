import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../redux/actions/job";
import { useDispatch, useSelector } from "react-redux";

const JobsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.job);
   
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  return (
    <div>
      <p className="ml-40 font-bold text-6xl font-serif">
        Apply For Your Dream Job Here!
      </p>

      <div className="flex gap-4 mt-6 ml-6">
        <input
          className="border-black rounded-sm w-11/12"
          type="text"
          placeholder="Search role or category here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className=" bg-richblack-900 rounded-[8px] font-medium text-richblack-100 px-[12px] py-[8px] h-10"
        >
          Search
        </button>
      </div>

      <table className="table table-bordered mt-6">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Role/Title</th>
            <th scope="col">Location</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {jobs &&
            jobs
              .filter(
                (item) =>
                  item.roleTitle.toLowerCase().includes(search.toLowerCase()) ||
                  item.location.toLowerCase().includes(search.toLowerCase()) || 
                  item.company.toLowerCase().includes(search.toLowerCase())
              )
              .map((job, index) => {
                return (
                  <tr key={index}>
                    <td>{job?.company}</td>
                    <td>{job?.roleTitle}</td>
                    <td>{job?.location}</td>
                    <td>
                      <button
                        className="bg-green-800 rounded-full p-2 mr-4 hover:text-white w-1/2"
                        onClick={() => {
                          navigate(`/job/${job?._id}`);
                        }}
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
