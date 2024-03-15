import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



export default function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ali-cs6')
    //     .then( response => response.json())
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // })
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl ">GitHub Followers: {data.following}
        <img width={300} className="rounded-full " src={data.avatar_url} alt="github profile" />
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ali-cs6')
    return response.json()
}