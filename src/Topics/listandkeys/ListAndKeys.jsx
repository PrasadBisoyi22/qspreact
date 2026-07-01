import React from 'react'

const ListAndKeys = () => {
    const arr = ['Prakash', 'Rahul', 'Vishal', 'Prakash', 'Rahul', 'Vishal'];
  return (
    <div>
        <ol className='ml-5 list-decimal'>
            {
                arr.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ol>
    </div>
  )
}

export default ListAndKeys