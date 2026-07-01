import React, { useState } from 'react'

const ChoseChar = () => {
    const[char,setChar]= useState("🥳")

    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    const choosechar =() =>{
        // const randomIndex = Math.floor(Math.random() * letters.length);
        // console.log(randomIndex)
        // const chosen = letters[randomIndex];
        // setChar(chosen);

        for (let i = 0; i<letters.length; i++){
          setTimeout(() => {
            setChar(letters[i])
          }, 100*i);
        }
        setTimeout(() => {
          setChar(letters[Math.floor(Math.random() * letters.length)])
        }, 100*letters.length+5);
    }


  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="text-6xl bg-gray-300 font-bold mb-4 w-[200px] h-[200px] rounded-full shadow-xl shadow-gray-600 flex items-center justify-center">
        {char}
      </div>
      <div className="flex gap-4">
        <button onClick={choosechar} className="bg-blue-500 text-white px-4 py-2 rounded-md">Click</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={()=>setChar("🥳")}>Reset</button>
        </div>
    </div>
  )
}

export default ChoseChar