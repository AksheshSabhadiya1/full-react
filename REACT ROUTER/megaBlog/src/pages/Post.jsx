import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/conf";
import parse from 'html-react-parser'
import { Button, Container } from '../components/index'
import { ThreeDots } from 'react-loader-spinner';


export default function Post() {

    const [post, setPost] = useState()
    const { slug } = useParams()
    const navigate = useNavigate()
    const [loader, setloader] = useState(true)

    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = post && userData ? post.userId === userData.$id : false

    useEffect(() => {
        if (slug) {
            appwriteService.getPost((slug)).then((post) => {
                if (post) setPost(post)
                else navigate('/')
            })
        } else navigate('/')
    }, [slug, navigate])

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredimage)
                navigate('/')
            }
        })
    }

    return loader ? post ? (
        <div className="py-8">
            <Container>
            <div className="w-full mb-6">
                    <h1 className="text-2xl text-center mb-4 font-bold">{post.title}</h1>
                    <div className="browser-css text-center">
                        {parse(post.content)}
                    </div>
                </div>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img src={appwriteService.getFilePreview(post.featuredimage)}
                        alt={post.title}
                        className="rounded-xl object-cover" />

                    {
                        !isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to='/'>
                                    <Button className="cursor-pointer rounded-xl me-3">Go Home</Button>
                                </Link>
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor='bg-green-500 cursor-pointer rounded-xl' className="mr-3">Edit</Button>
                                </Link>
                                <Button bgColor='bg-red-500 cursor-pointer rounded-xl' onClick={deletePost}>Delete</Button>
                            </div>
                        )
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
    </div> : null
}