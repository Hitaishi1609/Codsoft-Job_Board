import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobsList from "./pages/JobsList";
import JobDetails from "./pages/JobDetails";
import CreateJob from "./pages/CreateJob";
import { useDispatch, useSelector } from "react-redux";
import ApplicationForm from "./pages/ApplicationForm";
import { ProtectedRoute } from "protected-route-react";
import { useEffect } from "react";
import { clearErrorMessage, getMyProfile } from "./redux/actions/auth";
import { toast } from "react-hot-toast";

function App() {
  const { isAuthenticated, message, error, loading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  console.log("Authenticated : ", isAuthenticated);
  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

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

  return (
    <div className="w-screen h-screen bg-[#fca5a5] flex flex-col overflow-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Signup />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <JobsList />
            </ProtectedRoute>
          }
        />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/application-form" element={<ApplicationForm />} />
      </Routes>
    </div>
  );
}

export default App;
