import { useState } from "react";
import Child from "./Child";

const Usestatehooks = () =>{
    //top 
    
    const [count, setCount] =useState(100);

    const updateCount=()=>{
        setCount(count + 1);
    }
    const fetchdata  = async() => {
        const data = await fetch("https://api.github.com/users");
        const json = await data.json();
        console.log(json);
    }

    const nestedFun = ()=>{
        //nested function+
    }
    console.log("Parent")

     return(
        <div>
            <h1>Usestatehooks</h1>
            <h1>{count}</h1>
            <Child/>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}

export default Usestatehooks;