import React, { useEffect, useState } from "react";
import appwriteService from '../appwrite/conf'
import {Container, Postcard} from '../components/index' 
import { ThreeDots } from 'react-loader-spinner';


export default function Allpost() {

    const [post, setPost] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(()=> {
        appwriteService.getAllPost([]).then((post) => {
            if(post){
                setPost(post.documents)
                setLoader(false)
            }
        })
    }, [])

    

    return !loader ? (
        <div className="w-full py-8 min-h-100">
            <Container>
                <div className="flex flex-wrap">
                    { post.length > 0 ?
                        post.map((item) => (
                            <div key={item.$id} className="p-2 w-1/4">
                                <Postcard {...item} />
                            </div>
                        )) :  <div className="flex items-center justify-center w-full align-middle">
                        <h1 className="text-2xl font-bold max-h-full min-h-80 hover:text-gray-600">No Post</h1>
                    </div>
                    }
                </div>
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
</div>
}