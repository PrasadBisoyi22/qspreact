import React, { useRef, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { toast } from "react-toastify";
import { FiEye,FiEyeOff } from "react-icons/fi";

const ControlledForm = () => {
    const[theme,setTheme] = useState(true)

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    
      const handleSubmit = (e) => {
          e.preventDefault()
          
          
      }
  
      const tooglePassword=()=>{
        if(password1.current.type === "password"){
          password1.current.type = "text"
        }else{
          password1.current.type = "password"
        }
      }
      const handleinput =(e)=>{
        console.log(e.target.value)
        setUsername(e.target.value)
      }
      
  
    return (
      <div className={`min-h-screen flex items-center justify-center  px-4 ${theme?"bg-gray-100":"bg-blue-950"}`}>
        <div className={`relative w-[450px] rounded-[35px] p-10 pt-20 shadow-xl shadow-gray-600 ${theme?"bg-white":"bg-gray-600"}`}>
          
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center border-4 border-white">
            <FaLock className="text-white" size={35} />
          </div>
  
          <h1 className={`text-4xl font-bold text-center mb-8 ${`${theme?"text-slate-900":"text-white"}`}`}>
            Login Now
          </h1>
  
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className={`block text-gray-600 mb-2 ${`${theme?"text-slate-900":"text-white"}`}`}>
                Username *
              </label>
              <input
                type="text"
                placeholder="Enter your Username"
                className="w-full px-5 py-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleinput}
                value={username}
              />
            </div>
  
            <div>
              <label className={`block text-gray-600 mb-2 ${`${theme?"text-slate-900":"text-white"}`}`}>
                Password *
              </label>
              
              <div className="flex w-full justify-between items-center">
                <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-5 py-4 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FiEye className='absolute left-[80%]'  cursor={"pointer"}/>
              {/* <FiEyeOff /> */}
              </div>
            </div>
  
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-gray-500 text-sm">
                Remember me
              </label>
            </div>
  
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
            >
              LOGIN
            </button>
          </form>
  
          <div className="flex justify-between mt-6 text-sm text-gray-500">
            <a href="#" className="text-blue-950 hover:text-blue-500">
              Don't have an account?
            </a>
  
            <a href="#" className="text-blue-950 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
  
          <p className="text-center text-gray-400 text-sm mt-8">
            Image from <span className="underline">Freepik</span>
          </p>
        </div>
        <button 
        className={`absolute top-[40rem] right-10 cursor-pointer h-12 w-12 shadow-xl shadow-gray-500 rounded-2xl bg-slate-100 flex justify-center items-center ${theme? "bg-slate-100":"bg-slate-800"}`}
        onClick={()=>{setTheme(!theme)}}
        >
          {theme? <FaSun color="black" size={30}/>:<MdDarkMode color="white" size={30}/>}
        </button>
      </div>
    );
}

export default ControlledForm