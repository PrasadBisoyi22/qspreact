import React, { useEffect, useState } from 'react'

const UseEffectHookTask = () => {
    const [count,setCount]=useState(0)
    const fetchData=async () => {
        const data=await fetch("https://fakestoreapi.com/products")
        const res= await data.json()
        console.log(res)
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
       <h1>{count}</h1>
       <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

export default UseEffectHookTask