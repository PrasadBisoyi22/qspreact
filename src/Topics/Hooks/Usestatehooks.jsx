import { useState } from "react";

const Usestatehooks = () =>{
    //top 
    
    const [count, setCount] =useState(100);

    const updateCount=()=>{
        setCount(count + 1);
    }
    console.log(data)

    const nestedFun = ()=>{
        //nested function
    }

     return(
        <div>
            <h1>Usestatehooks</h1>
            <h1>{count}</h1>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}

export default Usestatehooks;