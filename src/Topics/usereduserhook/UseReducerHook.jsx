import React, { useReducer, useState } from 'react'
import { toast } from 'react-toastify'


const UseReducerHook = () => {
    const reducer=(state,action)=>{
        switch (action) {
            case "increment":
                return state+=1
            case "decrement":
                return state-=1
            case "reset":
                return state=0
        
            default:
                toast.error("something went wrong")
                return state
        }

    }
    const [count,dispatch] = useReducer(reducer, 0)

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl mb-4 '>{count}</h1>
        <hr />
        <div className='text-white'>
        <button onClick={()=>dispatch("increment")} className='m-2 p-3 w-32 bg-green-600 rounded-lg'>Increment</button>
        <button onClick={()=>dispatch("decrement")} className='m-2 p-3 w-32 bg-blue-600 rounded-lg'>Decrement</button>
        <button onClick={()=>dispatch("reset")} className='m-2 p-3 w-32 bg-yellow-400 rounded-lg'>Reset</button>
        </div>

    </div>
  )
}

export default UseReducerHook