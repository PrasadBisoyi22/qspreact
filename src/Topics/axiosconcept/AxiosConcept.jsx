import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Audio, CircularProgress, Oval, RotatingLines, Vortex } from 'react-loader-spinner'

const AxiosConcept = () => {
    const[products,setproducts]=useState(null)
    //! Without axios library
    // const fetchData=async () => {
    //     const data=await fetch("https://fakestoreapi.com/products")
    //     const res=await data.json()
    //     console.log(res)
    // }

    //! with axios library
    const fetchData=async () => {
        const {data}=await axios.get("https://fakestoreapi.com/products")
        setTimeout(()=>{
            console.log("Hello")
        },2000)
    } 
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        {
            !products ? <RotatingLines style={{ position: "absolute", top: "50%", left: "50%", margin:"auto"}}/> : products.map((ele,index)=>{
                return <h1>{ele.title}</h1>
            })
        }
    </div>
  )
}

export default AxiosConcept;