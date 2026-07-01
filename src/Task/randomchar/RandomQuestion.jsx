import React, { useState } from 'react'

const RandomQuestion = () => {
    const [question, setQuestion] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const quest = [1,2,3,4,5,6]
    const increse =()=>{
        if(question === quest.length-1){ setDisabled(true); return}
        setQuestion(question+1)
    }

    const decrease =()=>{
        if(question === 0){ setDisabled(true); return}
        setQuestion(question-1)
    }
    const last=()=>{
        if(question === quest.length-1||question === 0){ setDisabled(true); return}
        
    }
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-10'>
        <div className="text-2xl font-bold flex justify-center items-center h-[300px] w-[300px] shadow-2xl shadow-gray-600 rounded-full">
            {quest[question]}
        </div>

        <div className='flex gap-80'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={decrease}>Prev</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={increse}>Next</button>
        </div>
    </div>
  )
}

export default RandomQuestion