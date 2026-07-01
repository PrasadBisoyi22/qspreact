import React, { useState } from 'react'

const RadioAndCheckbox = () => {
    const [form,setForm] = useState({})
    const[gender,setGender] = useState("Male")
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(gender)
        
    }
    const handleChange = (e) => {
        const {name,value} = e.target
        setGender(value)
    }
  return (
    <div>
        <form action=""  onSubmit={handleFormSubmit}>
            <input type="radio" name="gender" checked={gender === "Male"} value ="male" onChange={handleChange}/>Male
            <input type="radio" name="gender" checked={gender === "Female"} value ="female" onChange={handleChange} /> Female
            <input type="radio" name="gender" checked={gender === "Others"} value ="Others" onChange={handleChange} /> Others
            <br />
            <br />

            <button>submit</button>
        </form>

    </div>
  )
}

export default RadioAndCheckbox