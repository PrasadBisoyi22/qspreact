import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";

const Signup = () => {
 const data={
        firstName:"",
        lastName:"",
        Email:"",
        phnumber:"",
        DOB:"",
        gender:"",
        password:"",
        confirmpassword:"",
        terms:false
    }
    const[errors,setErrors] = useState({})
    const[passwordeye,setPasswordeye] = useState(true)
    const[Theme,setTheme]=useState()
    const[userData, setUserData]=useState(data)
    const{firstName,lastName,Email,phnumber,DOB,gender,password,confirmpassword,terms}=userData

    const handlesSubmit =(e)=>{
        e.preventDefault();
        if(Validationdata()){
            localStorage.setItem("Signup",JSON.stringify(userData))
            console.log("Account created Sucessfully")
            setUserData(data)
            setErrors({})
        }else{
            console.log(errors)
        }
        
    }
    const handleInputChange=(e)=>{
        const{name,value}=e.target
        setUserData({...userData,[name]:value})
        setErrors({...errors,[name]:""})
    }
    const handleterm =(e)=>{
        setUserData({...userData,terms:e.target.checked})
        setErrors({...errors,terms:""})
    }
    const Validationdata =()=>{
        const{firstName,lastName,Email,phnumber,DOB,gender,password,confirmpassword,terms}=userData
        const error={}
        if(!firstName)error.firstName="First Name is Required"
        if(!lastName)error.lastName="First Name is Required"
        if(!Email)error.Email="Email is required"
        if(!phnumber)error.phnumber="Phone Number is required"
        if(!DOB)error.DOB="Date of birth is required"
        if(!gender)error.gender="please select the gender"
        if(!password)error.password="Password is required"
        if(!confirmpassword)error.confirmpassword="Plese Enter the confirm password"
        if(!terms)error.terms="Please accept the terms"
        
        
        if (Object.keys(error).length > 0) {
            setErrors(error);
            return false;
        }
        return true;
    }
    const validatepassword=(e)=>{
        const{name,value}=e.target
        setUserData({...userData,[name]:value})
        if(userData.password!=value){
            setErrors({...errors,[name]:"Password does not match"})
        }else{
            setErrors({...errors,[name]:""})
        }
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className=' w-auto h-auto p-10 gap-5 shadow-2xl shadow-gray-800 rounded-2xl'>
            <div className='flex items-center justify-center mb-8'>
                <h1 className='text-xl font-bold text-cyan-400'>Create your Account</h1>
            </div>
            <div>
                <form action="" onSubmit={handlesSubmit}>
                    <div className='flex gap-6 mb-4'>
                        <div>
                            <label htmlFor="" className='block mb-1'>First Name</label>
                            <input 
                                type="text" 
                                placeholder='First Name' 
                                name='firstName'
                                value={firstName} 
                                onChange={handleInputChange} 
                                className='border-2 rounded-xl p-2'
                            />
                            {
                                errors.firstName && <p className='text-red-700'>{errors.firstName}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor=""className='block mb-1'>Last Name</label>
                            <input 
                                type="text" 
                                placeholder='Last Name' 
                                name='lastName'
                                value={lastName} 
                                onChange={handleInputChange} 
                                className='border-2 rounded-xl p-2' 
                            />
                            {
                                errors.lastName && <p className='text-red-700'>{errors.lastName}</p>
                            }
                        </div>
                    </div>
                    <div className='flex gap-6 mb-4'>
                        <div>
                            <label htmlFor="" className='block mb-1'>Email</label>
                            <input 
                                type="email" 
                                name="Email" 
                                id="" 
                                placeholder='abc@gmail.com' 
                                value={Email} 
                                onChange={handleInputChange} 
                                className='border-2 rounded-xl p-2'
                            />
                            {
                                errors.Email && <p className='text-red-700'>{errors.Email}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-1'>Phone Number</label>
                            <input 
                                type="tel" 
                                name="phnumber"    
                                id="" 
                                placeholder='+91 9876543210' 
                                value={phnumber} 
                                onChange={handleInputChange}
                                className='border-2 rounded-xl p-2'
                            />
                            {
                                errors.phnumber && <p className='text-red-700'>{errors.phnumber}</p>
                            }
                        </div>
                    </div>
                    <div className='flex gap-6 mb-4'>
                        <div className='flex-1'>
                            <label htmlFor="" className='block mb-1'>Date of Birth</label>
                            <input 
                                type="date" 
                                name="DOB" 
                                id=""
                                value={DOB} 
                                onChange={handleInputChange}
                                className='border-2 rounded-xl px-3 py-2 w-full'
                            />
                            {
                                errors.DOB && <p className='text-red-700'>{errors.DOB}</p>
                            }
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="" className='block mb-1'>Gender</label>
                            <select name="gender" id=""  
                                value={gender} 
                                onChange={handleInputChange}
                                className='border-2 rounded-xl px-3 py-2 w-full'
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            {
                                errors.gender && <p className='text-red-700'>{errors.gender}</p>
                            }
                        </div>
                    </div>
                    <div className='flex gap-6 mb-4'>
                        <div>
                            <label htmlFor="" className='block mb-1'>Password</label>
                            <div className='relative'>
                                <input 
                                    type={passwordeye?"password":"text"} 
                                    name="password" 
                                    id="" 
                                    value={password} 
                                    onChange={handleInputChange}
                                    className='border-2 rounded-xl p-2' 
                                    placeholder='********'
                                />
                                 {
                                    passwordeye?(
                                        <FaEye 
                                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                            onClick={() => setPasswordeye(false)}
                                        />
                                    ):(
                                        <FaEyeSlash 
                                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                            onClick={() => setPasswordeye(true)}/>
                                    )
                                }
                            </div>
                            {
                                errors.password && <p className='text-red-700'>{errors.password}</p>
                            }
                        </div>
                        <div>
                            <label htmlFor="" className='block mb-1'>Confirm Password</label>
                            <div className='relative'>
                                <input 
                                    type={passwordeye?"password":"text"} 
                                    name="confirmpassword" 
                                    id="" 
                                    value={confirmpassword} 
                                    onChange={validatepassword}
                                    className='border-2 rounded-xl p-2' 
                                    placeholder='********'
                                />
                                {
                                    passwordeye?(
                                        <FaEye 
                                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                            onClick={() => setPasswordeye(false)}
                                        />
                                    ):(
                                        <FaEyeSlash 
                                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                            onClick={() => setPasswordeye(true)}/>
                                    )
                                }
                                
                            </div>
                            {
                                errors.confirmpassword && <p className='text-red-700'>{errors.confirmpassword}</p>
                            }
                        </div>
                    </div>
                    <div className='flex gap-6 mb-4'>
                        <div className='relative'>
                            <input 
                                type="checkbox" 
                                name="terms"
                                checked={terms} 
                                id=""
                                onChange={handleterm}
                            />

                        </div>
                        <p>I accept all the term and condition</p>
                            {
                                errors.terms && <p className='text-red-700'>{errors.terms}</p>
                            }
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='bg-cyan-700  w-[80%] py-2 flex justify-center items-center rounded-2xl text-slate-100 '>Create Accont</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup