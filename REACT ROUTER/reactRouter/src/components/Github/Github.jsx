import React, { useEffect, useState, } from "react";
import { useLoaderData } from "react-router-dom";


export default function Github(){

    // const [data, setData] = useState([])

    // useEffect(()=>{

    //     fetch('https://api.github.com/users/AksheshSabhadiya1')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])

    const data = useLoaderData()

    const [...key] = Object.keys(data) 
    const [...value] = Object.values(data)  

    return(
        <div className="bg-gray-600 m-2 text-2xl text-white p-2 ">
            <div>
                {data.name}'s Github Data : 
                <img src={data.avatar_url} alt="Git Image" width={200} />
                <div className="flex text-left pe-1">
                    <div>
                        { key.map( (key) => <p>{ key }</p>) }
                    </div>
                    <div>
                        { value.map((value) => <p>{ value }</p>) }
                    </div>
                </div>
            </div>
            Github Followers : {data.followers}
        </div>
    )
}


export const githubDataLodder = async () =>{
    const response = await fetch('https://api.github.com/users/AksheshSabhadiya1')
    return response.json()
}