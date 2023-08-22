import { useDispatch, useSelector } from "react-redux";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import { clearErrorMessage } from "../redux/actions/auth";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Home = () => {
  const { message, error } = useSelector(
    (state) => state.auth
  );
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
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
        <div className="flex flex-col gap-6 w-1/2">
          <h2 className="text-xl font-bold">Jobs are Listed here</h2>
          <h1 className="text-4xl font-extrabold">Find Your Dream Job</h1>
          <h3 className="text-lg font-semibold">
            Let us help you in finding a suitable job and evolve your
            professional life.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            maximus aliquet est et sagittis. Proin nec orci quis turpis cursus
            molestie tempus eu sapien. Donec ac turpis vel lorem auctor
            ultricies a in turpis. Etiam dignissim tellus vel eleifend commodo.
            Nunc pellentesque enim id erat pulvinar imperdiet. Morbi lobortis
            lectus velit. Quisque vulputate risus vitae est pulvinar placerat.
            Sed convallis, metus id tincidunt congue, odio ante euismod lacus,
            vitae dictum magna magna imperdiet tortor. Morbi quam ligula,
            dignissim quis risus at, vulputate scelerisque justo. Fusce sed
            hendrerit lacus.
          </p>
        </div>

        <div className="w-11/12 max-w-[500px] flex flex-col items-center gap-x-4 gap-y-6">
          <img
            src={background}
            alt="background"
            width={558}
            height={564}
            loading="lazy"
          />

          {/* buttons */}
          <Link to="/create-job">
            <button
              className="bg-richblack-800 text-richblack-100 py-[6px] 
              px-[12px] rounded-[8px] border border-richblack-700"
            >
              Post a Job
            </button>
          </Link>

          <Link to="/jobs">
            <button
              className="bg-richblack-800 text-richblack-100 py-[6px] 
              px-[12px] rounded-[8px] border border-richblack-700"
            >
              Find a Job
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
