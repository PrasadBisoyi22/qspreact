import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [count, setCount] = useState(0)
    console.log("parent")
    const username = "Prasad"
    const demo = useCallback(()=>{
        console.log("Parent Function execution")
    },[])
  return (
    <div>
        <h1>UseCallBackHook</h1>
        <hr />
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}} className='bg-yellow-500'>
            Update
        </button>
        <Child data={demo}/>
    </div>
  )
}

export default UseCallBackHook