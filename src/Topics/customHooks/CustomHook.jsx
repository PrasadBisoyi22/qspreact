import React from 'react'
import { useFetch } from '../usecallbackhook/Fetch'

const CustomHook = () => {
    const githubdata = useFetch("https://api.github.com/users")
    console.log(githubdata)
  return (
    <div>CustomHook</div>
  )
}

export default CustomHook