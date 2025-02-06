import axios from "axios";
import React, { useEffect, useState } from "react";


function FetchData2() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idbtn, setIdBtn] = useState(1)


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, [idbtn])

    return (
        <div>
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button value={id} onClick={id => setIdBtn(id)}>Click me</button>
            </div>
            <div>
                <h1>Id:{post.id}</h1>
                <h2>Title : {post.title}</h2>
            </div>
        </div>
    )
}

export default FetchData2