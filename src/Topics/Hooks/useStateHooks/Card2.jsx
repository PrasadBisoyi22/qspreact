import React, { useState } from 'react'

const Card2 = () => {
    const[cardData, setCardData] = useState({
        img:"https://cdn.pixabay.com/photo/2026/06/06/07/48/07-48-47-678_1280.jpg",
        name:"abc", 
        age:20, 
    })
    
    const change_Image =()=>{
        const url = prompt("Enter new image URL")
        setCardData({...cardData, img:url})
    }
    const change_name=()=>{
        const name = prompt("Enter new name")
        setCardData({...cardData, name:name})
    }
    const change_age =()=>{
        const age = parseInt(prompt("Enter new age"))
        setCardData({...cardData, age:age})

    }

  return (
    <div style={{height:"400px", width:"400px", border:"1px solid black", borderRadius:"20px", margin:"20px",overflow:"hidden"}}>
        <div style={{width:"100%", height:"60%", backgroundColor:"#c6c4e5", backgroundImage:`url(${cardData.img})`, backgroundSize:"cover"}}></div>
        <h1 style={{textAlign:"center", margin:"10px"}}>{cardData.name}</h1>
        <p style={{textAlign:"center", margin:"10px", fontSize:"20px"}}>Age : {cardData.age}</p>

        <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"5px"}}>
        <button onClick={change_Image} style={{padding :"10px", borderRadius:"9999px", border:"none", backgroundColor:"black", color:"white"}}>Change Image</button>
        <button onClick={change_name} style={{padding :"10px", borderRadius:"9999px", border:"none", backgroundColor:"blue", color:"white"}}>Change name</button>
        <button onClick={change_age} style={{padding :"10px", borderRadius:"9999px", border:"none",backgroundColor:"green", color:"white"}}>Change Age</button>
        </div>
    </div>
  )
}

export default Card2;