import React, { useState } from "react";

const ApplicationForm = () => {
    const initialvalue ={
        FullName:"",
        Email:"",
        password:"",
        PhoneNumber:"",
        Age:"",
        DOB:"",
        Gender:"",
        Address:"",
        job_role:"",
        Experience:"",
        HighestQualification:"",
        ExcepectedSalary :"",
        Skills:[],
        Resume:"",
        photo:"",
        portfoliolink:"",
        linkedinlink:"",
        joiningmonth:"",
        preferedInterviewTime:"",
        ThemeColor:"",
        terms:""
    }
    const[formData,setFormData]=useState(initialvalue)
    const[errors,setErrors]=useState({})

    const{FullName,Email,password,PhoneNumber,Age,DOB,Gender,Address,job_role,Experience,HighestQualification,ExcepectedSalary,Skills,Resume,photo,portfoliolink,linkedinlink,joiningmonth,preferedInterviewTime,ThemeColor,terms}=formData
    const handleInputChange = (e) => {
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
        setErrors({...errors,[name]:""})
        
    }
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setFormData({ ...formData, Skills: [...formData.Skills, e.target.value] });
        } else {
            setFormData({
                ...formData,
                Skills: formData.Skills.filter((skill) => skill !== e.target.value),
            });
        }
        setErrors({...errors,Skills:""})
        
    }
    const handletermsChange = (e) => {
        setFormData({...formData,terms:e.target.checked})
        setErrors({...errors,terms:""})
    }
    const handleFileChange = (e) => {
        const { name, files } = e.target;

        setFormData({...formData,[name]: files[0]});

        setErrors({...errors,[name]: ""});
    }
    const validateForm = () => {
        const{FullName,Email,password,PhoneNumber,Age,DOB,Gender,Address,job_role,Experience,HighestQualification,ExcepectedSalary,Skills,Resume,photo,portfoliolink,linkedinlink,joiningmonth,preferedInterviewTime,ThemeColor,terms}=formData
        const err={};
        if(!FullName) err.FullName="FullName is required"
        if(!Email) err.Email="Email is required"
        if(!password) err.password="password is required"
        if(!PhoneNumber) err.PhoneNumber="PhoneNumber is required"
        if(!Age) err.Age="Age is required"
        if(!DOB)err.DOB="Date of Birth is required"
        if(!Gender) err.Gender="Gender is required"
        if(!Address) err.Address="Address is required" 
        if(!job_role) err.job_role="job_role is required" 
        if(!Experience) err.Experience="Experience is required" 
        if(!HighestQualification) err.HighestQualification="HighestQualification is required" 
        if(!ExcepectedSalary)err.ExcepectedSalary="ExcepectedSalary is required" 
        if(Skills.length===0)err.Skills="Skills is required" 
        if(!Resume) err.Resume="Resume is required" 
        if(!photo)err.photo="photo is required"
        if(!portfoliolink) err.portfoliolink="portfoliolink is required"
        if(!linkedinlink) err.linkedinlink="linkedinlink is required"
        if(!joiningmonth) err.joiningmonth="joiningmonth is required"
        if(!preferedInterviewTime)err.preferedInterviewTime="preferedInterviweTime is required"
        if(!ThemeColor)err.ThemeColor="ThemeColor is required"
        if(!terms)err.terms="terms is required"

        if(Object.keys(err).length>0){
            setErrors(err)
            return false
        }
        return true;
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const isValid = validateForm()
        if(isValid){
            console.log("Form submitted successfully");
            localStorage.setItem("Userdata", JSON.stringify(formData));
            setErrors({})
        }
        else{
            console.log("Form validation failed");
        }
    }
    
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 text-white p-6">
          <h1 className="text-3xl font-bold">Job Application Form</h1>
          <p className="text-sm mt-1">
            Complete all the required details to apply for the position.
          </p>
        </div>

        <form className="p-8 space-y-8" onSubmit={handleFormSubmit}>

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  type="text"
                  name="FullName"
                  placeholder="John Doe"
                  className="w-full border rounded-md p-2"
                  value={FullName}
                  onChange={handleInputChange}
                />
                {
                  errors.FullName && <span className="text-red-500">{errors.FullName}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="Email"
                  placeholder="john@gmail.com"
                  className="w-full border rounded-md p-2"
                  value={Email}
                  onChange={handleInputChange}
                />
                {
                  errors.Email && <span className="text-red-500">{errors.Email}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="w-full border rounded-md p-2"
                  value={password}
                  onChange={handleInputChange}
                />
                {
                  errors.password && <span className="text-red-500">{errors.password}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  placeholder="+91 9876543210"
                  className="w-full border rounded-md p-2"
                  value={PhoneNumber}
                  onChange={handleInputChange}
                />
                {
                  errors.PhoneNumber && <span className="text-red-500">{errors.PhoneNumber}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Age</label>
                <input
                  type="number"
                  name="Age"
                  placeholder="25"
                  className="w-full border rounded-md p-2"
                  value={Age}
                  onChange={handleInputChange}
                />
                {
                  errors.Age && <span className="text-red-500">{errors.Age}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="DOB"
                  className="w-full border rounded-md p-2"
                  value={DOB}
                  onChange={handleInputChange}
                />
                {
                  errors.DOB && <span className="text-red-500">{errors.DOB}</span>
                }
              </div>
            </div>

            <div className="mt-5">
              <label className="block mb-2">Gender</label>

              <div className="flex gap-6">
                <label>
                  <input type="radio" name="Gender" value="male" onChange={handleInputChange}/> Male
                </label>

                <label>
                  <input type="radio" name="Gender" value="female" onChange={handleInputChange} /> Female
                </label>

                <label>
                  <input type="radio" name="Gender" value="other" onChange={handleInputChange} /> Other
                </label>
              </div>
              {
                errors.Gender && <span className="text-red-500">{errors.Gender}</span>
              }
            </div>

            <div className="mt-5">
              <label className="block mb-2">Address</label>

              <textarea
                rows="4"
                name="Address"
                className="w-full border rounded-md p-2"
                placeholder="Enter your complete address"
                value={Address}
                onChange={handleInputChange}
              ></textarea>
              {
                errors.Address && <span className="text-red-500">{errors.Address}</span>
              }
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">
              Professional Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1">Job Role</label>
                <input
                  type="text"
                  name="job_role"
                  className="w-full border rounded-md p-2"
                  value={job_role}
                  onChange={handleInputChange}
                />
                {
                  errors.job_role && <span className="text-red-500">{errors.job_role}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Experience</label>
                <input
                  type="number"
                  name="Experience"
                  className="w-full border rounded-md p-2"
                  value={Experience}
                  onChange={handleInputChange}
                />
                {
                  errors.Experience && <span className="text-red-500">{errors.Experience}</span>
                }
              </div>

              <div>
                <label className="block mb-1">Highest Qualification</label>

                <select className="w-full border rounded-md p-2" name="HighestQualification" value={HighestQualification} onChange={handleInputChange} >
                  <option value="">Select Qualification</option>
                  <option value="B.ech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="B.A">B.A</option>
                  <option value="M.A">M.A</option>
                  <option value="B.Com">B.Com</option>
                  <option value="M.Com">M.Com</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Sc">M.Sc</option>
                  <option value="MCA">MCA</option>
                </select>
                {
                  errors.HighestQualification && <span className="text-red-500">{errors.HighestQualification}</span>
                }
              </div>

              <div>
                <label className="block mb-1">
                  Expected Salary (LPA){ExcepectedSalary}
                </label>

                <input
                  type="range"
                  name="ExcepectedSalary"
                  min="10000"
                  max="500000"
                  className="w-full"
                  value={ExcepectedSalary}
                  onChange={handleInputChange}
                />
                {
                  errors.ExcepectedSalary && <span className="text-red-500">{errors.ExcepectedSalary}</span>
                }

              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-3 font-medium">
                Technical Skills
              </label>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Java",
                  "Spring Boot",
                  "MongoDB",
                  "MySQL",
                  "Python",
                  "Git",
                  "Docker",
                ].map((skill,index) => (
                  <label key={skill} className="flex items-center gap-2">
                    <input type="checkbox" 
                        name="Skills"
                        value={skill} onChange={handleCheckboxChange}
                        checked={Skills.includes(skill)}
                    />
                    {skill}
                  </label>
                ))}
              </div>
              {
                errors.Skills && <span className="text-red-500">{errors.Skills}</span>
              }
            </div>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-5">Documents</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Upload Resume</label>
                <input
                  type="file"
                  name="Resume"
                  className="w-full border rounded-md p-2"
                  onChange={handleFileChange}
                />
                {
                  errors.Resume && <span className="text-red-500">{errors.Resume}</span>
                }
              </div>

              <div>
                <label className="block mb-2">Profile Photo</label>
                <input
                  type="file"
                  name="photo"
                  className="w-full border rounded-md p-2"
                  onChange={handleFileChange}
                />
                {
                  errors.photo && <span className="text-red-500">{errors.photo}</span>
                }
              </div>
            </div>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-5">Portfolio</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Portfolio Website</label>
                <input
                  type="url"
                  name="portfoliolink"
                  className="w-full border rounded-md p-2"
                  value={portfoliolink}
                  onChange={handleInputChange}
                />
                {
                  errors.portfoliolink && <span className="text-red-500">{errors.portfoliolink}</span>
                }
              </div>

              <div>
                <label className="block mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedinlink"
                  className="w-full border rounded-md p-2"
                  value={linkedinlink}
                  onChange={handleInputChange}
                />
                {
                  errors.linkedinlink && <span className="text-red-500">{errors.linkedinlink}</span>
                }
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">Availability</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Joining Month</label>
                <input
                  type="month"
                  name="joiningmonth"
                  className="w-full border rounded-md p-2"
                  value={joiningmonth}
                  onChange={handleInputChange}
                />
                {
                  errors.joiningmonth && <span className="text-red-500">{errors.joiningmonth}</span>
                }
              </div>

              <div>
                <label className="block mb-2">
                  Preferred Interview Time
                </label>

                <input
                  type="time"
                  name="preferedInterviewTime"
                  className="w-full border rounded-md p-2"
                  value={preferedInterviewTime}
                  onChange={handleInputChange}
                />
                {
                  errors.preferedInterviweTime && <span className="text-red-500">{errors.preferedInterviweTime}</span>
                }
              </div>
            </div>

            <div className="mt-5">
              <label className="block mb-2">
                Preferred Theme Color
              </label>

              <input type="color" name="ThemeColor" value={ThemeColor} onChange={handleInputChange}  />
              {
                errors.ThemeColor && <span className="text-red-500">{errors.ThemeColor}</span>
              }
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="terms" checked={terms} onChange={handletermsChange} />

              I confirm that all the information provided is correct.
            </label>
            {
              errors.terms && <span className="text-red-500">{errors.terms}</span>
            }
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              onClick={()=>{setFormData(initialvalue);setErrors({})}}
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;