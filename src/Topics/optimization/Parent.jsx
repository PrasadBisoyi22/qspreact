import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[number,setNumber] = useState(0)
    console.log("Parent")
    const username = "prasad"
  return (
    <div>
        <h1>Parent Component</h1>
        <hr />
        <h1>{number}</h1>
        <button 
        onClick={()=>(setNumber(number+1))} className=''>
            Update the number
        </button>
        <Child data={username}/>

    </div>
  )
}

export default Parent