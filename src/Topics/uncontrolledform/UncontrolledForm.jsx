import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const username = useRef()
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("form Handled")
        const data = username.current.value
        localStorage.setItem("username", data)
        console.log(data)
        username.current.value = ""
    }
    console.log(username)
    


  return (
    <div>
        <h1>
            UncontrolledForm
        </h1>
        <form onSubmit={submitHandler}>
            <input type="text" className='border-2' placeholder='username' ref={username} /><br />
            <input type="number" placeholder='age' className='border-2' /><br />
            <button type='submit' className='border-2' >Submit</button>
        </form>
    </div>
    
  )
}

export default UncontrolledForm