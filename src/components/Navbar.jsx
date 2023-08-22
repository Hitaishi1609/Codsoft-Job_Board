import React from "react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/auth";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <div className="flex flex-row">
        <Link to="/">
          <img src={logo} alt="Logo" width={70} height={28} loading="lazy" />
        </Link>

        <div className="flex flex-col">
          <p className="text-2xl italic font-serif font-semibold">Job Board</p>
          <p>Your dream job is here</p>
        </div>
      </div>

      <nav>
        <ul className="text-richblack-900 flex gap-x-6">
          <li className="text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg">
            <Link to="/jobs">Find Jobs</Link>
          </li>

          <li className="text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      {/* login and signup */}

      <div className="flex items-center gap-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
              >
                Sign up
              </button>
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
