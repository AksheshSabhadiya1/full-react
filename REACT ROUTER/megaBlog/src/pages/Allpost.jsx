import React, { useEffect, useState } from "react";
import appwriteService from '../appwrite/conf'
import {Container, Postcard} from '../components/index' 

export default function Allpost() {

    const [post, setPost] = useState([])
    // useEffect(()=> {}, [])

    appwriteService.getAllPost([]).then((post) => {
        if(post){
            setPost(post.documents)
        }
    })

    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        post.map((item) => (
                            <div key={item.$id} className="p-2 w-1/4">
                                <Postcard {...item} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}