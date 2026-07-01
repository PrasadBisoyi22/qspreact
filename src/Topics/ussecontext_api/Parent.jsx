import React, { useContext } from 'react'
import Child from './Child'
import { UserContext } from './UseContextApi';

const Parent = () => {
    const data = useContext(UserContext);
    console.log(data);
  return (
    <div>
        <h1>Parent</h1>
    </div>
  )
}

export default Parent