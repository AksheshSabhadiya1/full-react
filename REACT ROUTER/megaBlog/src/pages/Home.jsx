import React, { useEffect, useState } from "react";
import {Container, Postcard} from '../components/index'
import appWriteService from "../appwrite/conf";

export default function Home(){

    const [post, setPost] = useState([])

    useEffect(()=> {
        appWriteService.getAllPost([]).then((post)=> {
            if(post){
                setPost(post)
            }
        })
    }, [])

    if(post.length === 0){
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">Login to Read Post</h1>
                        </div>
                    </div>
                </Container>                
            </div>
        )
    }
    
    return (
        <div className="w-full py-8">
            <Container>
            <div className="flex flex-wrap">
                { post.length > 0 &&
                    post.map((item)=> (
                        <div key={item.$id} className="p-2 w-1/4">
                            <Postcard post={item}/>
                            {/* <Postcard {...item} /> */}
                        </div>
                    ))
                }
            </div>
            </Container>
        </div>
    )
}