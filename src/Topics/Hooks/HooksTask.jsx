import { useState } from "react";
import Card from "./Card";
import './Card.css'

const HooksTask = () => {
    const[data, setData] = useState(null);
    const fetchdata = async () => {
        const data = await fetch ("https://api.github.com/users");
        const json = await data.json();
        setData(json);  
    }

    return (
        <div>
            <button onClick={fetchdata} className="btncall">Click to fetch the Data</button>
            <div className="card-container">
            {
                data?.map((ele) => {
                    return <Card key={ele.id} data={ele}/>
                })
            }
            </div>
            
        </div>
    )
}

export default HooksTask;