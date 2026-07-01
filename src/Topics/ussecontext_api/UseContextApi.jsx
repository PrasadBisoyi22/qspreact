import React from 'react'
import Parent from './Parent'
import Child from './Child';

export const UserContext = React.createContext();
const UseContextApi = () => {
    const data ={
        username:"Sachita",
        age:23,
        gender:"male",
        education:"Diploma",
        place:"ganjam",
        college:"SMIT",
        batch:"2025",
    }
  return (
    <div>
        <UserContext value={data}>
            <Parent/>
        </UserContext>
        <Child/>
    </div>
  )
}

export default UseContextApi