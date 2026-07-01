import axios from 'axios'
import React, { useState } from 'react'
import Card from './Card'
import { RotatingLines } from 'react-loader-spinner'

const AxiosTask = () => {
    const[products,setproducts]=useState(null)
    const fetchData = async () => {
        const {data} =await axios.get("https://fakestoreapi.com/products")
        setTimeout(()=>{
            setproducts(data)
        },5000)
    }

    fetchData()

    
  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            !products ? <RotatingLines/> : products.map((ele,index)=>{
                return <Card key={index} productData={ele}/>
            })
        }
    </div>
  )
}

export default AxiosTask