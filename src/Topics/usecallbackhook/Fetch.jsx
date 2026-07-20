import { useEffect, useState } from "react"

export const useFetch = (url)=>{
    const [userdata,setUserData]= useState(null)
    const fdata = async()=>{
        try{
            const {data} =await axios.get(url);
            setUserData(data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fdata()
    })
    return userdata;
}