import React, { useState } from 'react'

const MultipleCheckbox = () => {
    const [Skills, setSkills] = useState([])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(Skills)
    }
    const handleCheckbox = (e)=>{
        if(e.target.checked){
            setSkills([...Skills,e.target.value])
        }
        else{
            setSkills(Skills.filter((skill)=>skill!==e.target.value))
        }
    }

  return (
    <div>
        <form action="" onSubmit={handleFormSubmit}>
            <label htmlFor="Skills">Skills</label>
            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "html"
            />html

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "css" 
            />css

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "js" 
            />Js

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "react" 
            />react

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "Sql" 
            />SQL

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "Node" 
            />Node

            <input 
            type="checkbox" 
            onChange={handleCheckbox}
            value = "java" 
            />java

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default MultipleCheckbox