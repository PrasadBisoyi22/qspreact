import React from 'react'

const Child = ({data}) => {
    console.log("Child")
  return (
    <div>Child

        {data}
    </div>
  )
}

export default React.memo(Child)