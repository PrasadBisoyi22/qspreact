import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const h1ref=useRef()
    const boxRef=useRef()
    console.log(h1ref)

    const changeColor=()=>{
        h1ref.current.style.backgroundColor="red"
    }

    const OffBox=()=>{
        boxRef.current.style.visibility="hidden"
    }
     const OnBox=()=>{
        boxRef.current.style.visibility="visible"
    }

    console.log("hello")
  return (
    <div>
        <h1 ref={h1ref}>UseRefHook</h1>
       
        <button onClick={changeColor}>Click</button>
         <div ref={boxRef}    style={{width:"100px",height:"100px",backgroundColor:"blue"}}></div>
        <button onClick={OnBox}>On</button>
        <button onClick={OffBox}>Off</button>
    </div>
  )
}

export default UseRefHook