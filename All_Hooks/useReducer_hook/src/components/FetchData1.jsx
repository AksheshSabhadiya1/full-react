import React, { useEffect, useState } from "react";
import axios from 'axios'

function FetchData1(){

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [post, setPost] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setLoading(true),
            setPost(res.data),
            setError('')
        }
            
        )
        .catch(err => {
            setLoading(false),
            setPost([]),
            setError('Something went wrong')
        }
        )

        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => console.log(res.json))
        // .catch(err => console.log(err))
        
    },[])
    console.log(post);
    return(
        <div>
                 {
                    loading ? post.map( (item) => <li key={item.id}> {item.title}</li>) : error ? error : 'Loading...' 
                 }
            
        </div>
    )
}

export default FetchData1