import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import { loginUser } from "../../Slices/userslice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import  {setDataToLocalStorage} from "../../Utilies/LocalStorge"
const intialvalue = {
  email: "",
  password: "",
};
const Login = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const { handleSubmit, register } = useForm({
    defaultValues: intialvalue,
  });

  const handleSubmitData = async (data) => {

    try{
        dispatch(loginUser(data)).unwrap()
        .then((data)=>{
            setDataToLocalStorage("authToken",data.data.token);
            navigate("/dashboard")
        }
        )
        .catch((error)=>console.log(error))

    }catch(error){
        console.log(error)
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

            <button type="submit" className="border border-black p-2 mt-4">
              Singn in
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
