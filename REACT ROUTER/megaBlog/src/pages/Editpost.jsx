import React, { useEffect, useState } from "react";
import {Container, PostForm} from '../components/index'
import appwriteService from '../appwrite/conf'
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';


export default function Editpost(){

    const [post, setPost] = useState(null)
    const [loader, setloader] = useState(false)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setloader(true)
        if(slug){
            
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug, navigate])

    return loader? post?.$id ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) :  <div className="flex items-center justify-center w-full align-middle">
        {/* <h1 className="text-2xl font-bold max-h-full min-h-95 hover:text-gray-600 mt-5">Loading.....</h1> */}
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="white"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
    </div> : null
}