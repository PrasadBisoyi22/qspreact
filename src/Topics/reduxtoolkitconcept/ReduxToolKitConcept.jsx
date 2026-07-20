import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../feature/counterSlice'

const ReduxToolKitConcept = () => {
  const {count} = useSelector((state)=>state.counter)
  console.log(count)
  const dispatch =useDispatch()
  return (
   <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-4xl mb-4 '>{count}</h1>
        <hr />
        <div className='text-white'>
        <button onClick={()=>dispatch(increment(10))} className='m-2 p-3 w-32 bg-green-600 rounded-lg'>Increment</button>
        <button onClick={()=>dispatch(decrement())} className='m-2 p-3 w-32 bg-blue-600 rounded-lg'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='m-2 p-3 w-32 bg-yellow-400 rounded-lg'>Reset</button>
        </div>

    </div>
  )
}

export default ReduxToolKitConcept