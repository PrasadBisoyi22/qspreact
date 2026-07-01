import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count,setCount]=useState(0)
    const [val,setVal]=useState(100)
    const updateCount=()=>{
        setCount(count+1)
    }
//!   1.useEffect(callback) it will execute the callback function for every re-render
    // useEffect(()=>{
    //     console.log("hello")
    // })

//!  2. useEffect(callback,[]) it exectues only one time i.e in the intial load.

    // useEffect(()=>{
    //     console.log("hello")
    // },[])
//! 3. useEffect(callback,[dependency])
// if the dependency value changes the callback function will executes

    useEffect(()=>{
        console.log("hello")
    },[val,count])


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={updateCount}>Update</button>
        <hr />
        <h1>{val}</h1>
        <button onClick={()=>{setVal(val+1)}}>Update val</button>
    </div>
  )
}

export default UseEffectHook