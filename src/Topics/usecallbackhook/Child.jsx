import React from 'react'

const Child = ({data}) => {
    console.log("Child")
  return (
    <div>
        <h1>Child</h1>
        <button onClick={data}>Click</button>
    </div>
  )
}

export default React.memo(Child)