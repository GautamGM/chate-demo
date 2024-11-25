// eslint-disable-next-line no-unused-vars
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../../Slices/userslice/userSlice";
import { Navigate,useNavigate } from "react-router";
const intialvalue = {
  email: "",
  password: "",
};
const Register = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { handleSubmit, register, reset } = useForm({
    defaultValues: intialvalue,
  });

  const handleSubmitData = (data) => {
  try{
    dispatch(createUser(data)).unwrap()
    .then((data)=>{
      if(data.statusCode===200){
        navigate("/login")
      }else{
       navigate("/register")
      }
    })
    .catch((error)=>console.log(error))
    
  }catch(error){
    console.log(error)
  }
    reset();
  };
  return (
    <div>
      <h1 className="text-center font-[700] text-[24px]">Register User</h1>
      <form
        action=""
        className="flex justify-center flex-col items-center "
        onSubmit={handleSubmit(handleSubmitData)}
      >
        <div className=" flex flex-col border h-[200px] w-[500px] justify-between">
          <label htmlFor="">name</label>
          <input
            type="text"
            className="border border-black "
            placeholder="enter your email"
            {...register("name", { required: true })}
          />
          <label>email</label>
          <input
            type="text"
            className="border border-black "
            placeholder="email"
            {...register("email", { required: true })}
          />
          {/* ---------------------------- */}
          <label>countryCode</label>
          <input
            type="text"
            className="border border-black "
            placeholder="countryCode"
            {...register("countryCode", { required: true })}
          />
          {/* ---------------------------- */}
          <label>contactNumber</label>
          <input
            type="text"
            className="border border-black "
            placeholder="contactNumber"
            {...register("contactNumber", { required: true })}
          />
          {/* ---------------------------- */}
          <label>password</label>
          <input
            type="text"
            className="border border-black "
            placeholder="password"
            {...register("password", { required: true })}
          />
          {/* ---------------------------- */}

          <button type="submit" className="border mt-5 border-black  bg-[blue] p-5 rounded text-white ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;

// {
//     "name": "string",
//     "email": "string",
//     "password": "string",
//     "countryCode": "string",
//     "contactNumber": "string"
//   }
