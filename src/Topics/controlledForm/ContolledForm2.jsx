import React, { useState } from 'react'

const ContolledForm2 = () => {
    const [form,setForm] =useState({
        username:"",
        email:"",
        education:"",
        date:""
    })
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    const handleChange = (e) => {
        const {name,value} = e.target
        setForm({...form,[name]:value})
    }
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <form action="" onChange={handleChange} onSubmit={handleFormSubmit} className='gap-5'>
            <input type="text" placeholder='Username' name="username" value={form.username} onChange={handleChange} className='border-2 m-4'/><br />
            <input type="email" placeholder='email' name='email' value={form.email} onChange={handleChange} className='border-2 m-4'/><br />
            <select name="education" onChange={handleChange}>
                <option value="">select</option>
                <option value="java full stack">java full stack</option>
                <option value="Python full stack">Python full stack</option>
                <option value="MERN full Stack">MERN full Stack</option>
            </select>
            <input type="date" value={form.date} name="date" onChange={handleChange} />
            <br />
            <button className=' bg-emerald-600 rounded-lg'>Submit</button>

        </form>
    </div>
  )
}

export default ContolledForm2