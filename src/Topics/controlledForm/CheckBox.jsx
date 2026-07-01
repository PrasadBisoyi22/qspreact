import React, { useState } from 'react'

const CheckBox = () => {
    const[terms,setTerms] = useState(false)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(terms)
    }
    const handleChange = (e) => {
        setTerms(e.target.checked)
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="terms" onChange={handleChange} />Terms & condition <br />
            <button>submit</button>
        </form>
    </div>
  )
}

export default CheckBox