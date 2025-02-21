import React, { useEffect, useState } from "react";
import { Container, Postcard } from '../components/index'
import appWriteService from "../appwrite/conf";
import { useSelector } from "react-redux";
import { ThreeDots } from 'react-loader-spinner';

export default function Home() {

    const [post, setPost] = useState([])
    const [lodder, setloadder] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        appWriteService.getAllPost([]).then((post) => {
            if (post) {
                setPost(post.documents)
                setloadder(false)
            }
        })
    }, [])

    if (post && authStatus === false) {
        return (
            <div className="w-full py-8 mt-4 text-center min-h-100">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full ">
                            <h1 className="text-2xl font-bold max-h-full hover:text-gray-600 flex items-center justify-center">Login to Read Post</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return !lodder ? (
        <div className="w-full py-8 min-h-100">
            <Container>
                <div className="flex flex-wrap">
                    {post.length > 0 ?
                        post.map((item) => (
                            <div key={item.$id} className="p-2 w-1/4">
                                {/* <Postcard post={item}/> */}
                                <Postcard {...item} />
                            </div>
                        )) : <div className="flex items-center justify-center w-full align-middle">
                            <h1 className="text-2xl font-bold max-h-full min-h-80 hover:text-gray-600">No Post</h1>
                        </div>
                    }

                </div>
            </Container>
        </div>
    ) : <div className="flex items-center justify-center w-full align-middle">
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