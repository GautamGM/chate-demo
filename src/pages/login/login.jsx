import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { loginUser } from "../../Slices/userslice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router";
import { setDataToLocalStorage } from "../../Utilies/LocalStorge";
import { toast } from "sonner";
const intialvalue = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading ,userData} = useSelector((state) => state.user);
  const {
    handleSubmit,
    register,
  } = useForm({
    defaultValues: intialvalue,
  });
  console.log(isLoading,"loas",userData)
  const handleSubmitData = async (data) => {
    try {
      dispatch(loginUser(data))
        .unwrap()
        .then((data) => {
          console.log(data, "login page");
          toast.success(data.message);
          setDataToLocalStorage("authToken", data.data.token);
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.info(error);
        });
    } catch (error) {
      toast.error("error plese try again ");
      console.log(error);
    }
  };

  return (
    <div className=" ">
      <h1 className="text-center font-[700] text-[24px]">Login user</h1>
      <form
        action=""
        className="flex  flex-col  justify-center items-center"
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className="inner-div border  h-[460px]  p-[15px]  rounded-[15px]">
          <div className="logo">
            <span>
              <FaUserCircle className="text-[48px] text-[blue] " />{" "}
              <span className=" text-[24px] font-[600]">LOGIN </span>
            </span>
          </div>
          <div className="flex flex-col w-[400px] p-5 border h-[270px] bg-[red] justify-center ">
            <label htmlFor="email" className="text-[18px] font-[500]">
              email
            </label>
            <input
              type="email"
              className="border border-black p-2 rounded  "
              placeholder="enter your email"
              id="email"
              {...register("email", { required: true })}
            />

            <label htmlFor="password" className="text-[18px] font-[500]">
              Password
            </label>
            <input
              type="password"
              className="border border-black p-2 rounded "
              placeholder="Password"
              id="password"
              {...register("password", { required: true })}
            />

            <button
              disabled={isLoading}
              type="submit"
              className="border border-black p-2 mt-4"
            >
              {isLoading ? "logging..." : "Sign in"}
            </button>
            <p className="mt-3">
              If you don&apos;t have account please{" "}
              <Link to="/register" className="text-blue-900 font-[500]">
                Click here
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
