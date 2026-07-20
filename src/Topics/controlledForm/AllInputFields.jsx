import React, { useState } from "react";

const AllInputFields = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    gender: "",
    Skills: [],
    college: "",
    graduationyear: "",
    DOB: "3",
    profile: "",
  });
 

  const handleInput = (e) => {
      const {name,value} = e.target
      setForm({...form,[name]:value})
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setForm({ ...form, Skills: [...form.Skills, e.target.value] });
      console.log(form.Skills);
    } else {
      setForm({
        ...form,
        Skills: form.Skills.filter((skill) => skill !== e.target.value),
      });
    }
  }
  const handleFile = (e) => {
    setForm({...form,profile:e.target.files[0]})
  }

  const {username,age,email,password,gender,Skills,college,graduationyear,DOB,profile}=form;

  return (
    <div className="h-auto w-full flex justify-center items-center shadow-xl">
      <form className="shadow-2xl p-10 flex flex-col gap-2 w-[600px] m-5 rounded-2xl" onSubmit={handleFormSubmit}>
        <h1 className="text-2xl font-bold text-center">
          Registration Form
        </h1>

        <label>Username</label>
        <input type="text" name="username" placeholder="Username" className="border-2 rounded-xl p-2" value={username} onChange={handleInput} />

        <label>Age</label>
        <input type="Number" name="age" placeholder="Age" className="border-2 rounded-xl p-2" value={age} onChange={handleInput} />


        <label>Email</label>
        <input type="email" name="email" placeholder="Email" className="border-2 rounded-xl p-2" value={email} onChange={handleInput} />

        <label>Password</label>
        <input type="password" name="password" placeholder="Password" className="border-2 rounded-xl p-2" value={password} onChange={handleInput} />
        <label>Gender</label>
        <div className="flex gap-2">
          <input type="radio" name="gender" value="Male"  checked={gender=="Male"} onChange={handleInput}/>
          Male
          <input type="radio" name="gender" value="Female" checked={gender=="Female"} onChange={handleInput}/>
          Female
          <input type="radio" name="gender" value="Others" checked={gender=="Others"} onChange={handleInput}/>
          Others
        </div>

        <label>Skills</label>
        <div className="flex gap-2">
          <input type="checkbox" name="" value="HTML" id="" checked={Skills?.includes("HTML")} onChange={handleCheckbox}/>HTML
          <input type="checkbox" name="" value="CSS" id="" checked={Skills?.includes("CSS")} onChange={handleCheckbox}/>CSS
          <input type="checkbox" name="" value="JS" id="" checked={Skills?.includes("JS")} onChange={handleCheckbox}/>JS
          <input type="checkbox" name="" value="React" id="" checked={Skills?.includes("React")} onChange={handleCheckbox}/>React
          <input type="checkbox" name="" value="Python" id="" checked={Skills?.includes("Python")} onChange={handleCheckbox}/>Python
          <input type="checkbox" name="" value="Java" id="" checked={Skills?.includes("Java")} onChange={handleCheckbox}/>Java
        </div>

        <label>College</label>
        <select name="college"  className="border-2 rounded-xl p-2" value={college} onChange={handleInput}>
          <option value="">Select College</option>
          <option value="College 1"  >College 1</option>
          <option value="College 2" >College 2</option>
          <option value="College 3" >College 3</option>
          <option value="College 4" >College 4</option>

        </select>

        <label>Graduation Year</label>
        <input type="month" name="graduationyear" placeholder="Graduation Year" className="border-2 rounded-xl p-2" value={graduationyear} onChange={handleInput}/>

        <label>Date of Birth</label>
        <input type="date" name="DOB" value={DOB} className="border-2 rounded-xl p-2" onChange={handleInput} />

        <label>Profile</label>
        <input type="file" name="profile" className="border-2" onChange={handleFile}/>

        <button
          type="submit"
          className="bg-emerald-600 text-white rounded-lg py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AllInputFields;