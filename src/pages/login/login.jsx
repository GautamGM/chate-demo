import { useForm,Controller } from "react-hook-form"
import { loginUser } from "../../ApiInstance/chateApi"
const intialvalue={
    email:"",
    password:""
}
const LoginUser=()=>{
    const {handleSubmit,register,control,reset}=useForm({
        defaultValues:intialvalue
    })

    const handleSubmitData=async(data)=>{
        try{
            const res=await loginUser(data)
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <h1 className="text-center font-[700] text-[24px]">Login user</h1>
            <form action="" className="flex justify-center flex-col items-center" onSubmit={handleSubmit(handleSubmitData)}>
               <div>
               <label htmlFor="">email</label>
                <input type="text" className="border border-black " placeholder="enter your email" {...register("email",{required:true})} />
                <label>Password</label>
                <input type="text" className="border border-black " placeholder="Password" {...register("password",{required:true})} />
                <button type="submit" className="border border-black">Singn Up</button> 
               </div>
            </form>
        </div>
    )
}
export default LoginUser