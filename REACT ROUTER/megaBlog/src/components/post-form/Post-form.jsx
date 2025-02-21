import React, { useCallback, useEffect, useState } from "react";
import { Button, Select, Input, RTE } from '../index'
import { useForm } from "react-hook-form";
import appwriteService from '../../appwrite/conf'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThreeDots } from 'react-loader-spinner';



export default function PostForm({ post }) {
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)
    const [loader, setloadder] = useState(false)
    // console.log("post: ",post.title);

    const { register, control, handleSubmit, watch, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || 'default value',
            status: post?.status || 'Active',
        }
    })

    const submitData = async (data) => {
        setloadder(true)

        if (post) {
            const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null

            if (file) {
                appwriteService.deleteFile(post.featuredimage)
            }
            const dbpost = await appwriteService.updatePost(post.$id,
                { ...data, featuredimage: file ? file.$id : undefined })

            if (dbpost) {
                navigate(`/post/${dbpost.$id}`)
            }

        } else {
            const file = await appwriteService.uploadFile(data.image[0])

            if (file) {
                const fileId = file.$id
                data.featuredimage = fileId
                const dbpost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })
                
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`)
                }
            }
        }
        setloadder(false)
    }


    const slugTransform = useCallback((value) => {
        if (value && typeof(value) === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d@$#%&*:,.']+/g, '-')
                // .replace(/\s/g, '-')
        }
        return ''
    }, [])


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true })
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])



    return !loader ? (
        <form onSubmit={handleSubmit(submitData)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label='Title: '
                    placeholder='Enter Title'
                    className='mb-4'
                    {...register('title', { required: true })}
                />

                <Input
                    label='Slug: '
                    placeholder='Slug'
                    className='mb-4'
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />

                <RTE
                    label='Content: '
                    name='content'
                    control={control}
                    defaultvalue={getValues('content')}
                />
            </div>

            <div className="w-1/3 px-2">
                <Input
                    label='Featured Image: '
                    type="file"
                    className='mb-4 cursor-pointer'
                    accept='image/png, image/jpg, image/jpeg, image/gif'
                    {...register('image', { required: !post })}
                />

                {
                    post && (
                        <div className="w-full mb-4">
                            <img src={appwriteService.getFilePreview(post.featuredimage)}
                                alt={post.title}
                                className="rounded-lg" />
                        </div>
                    )
                }

                <Select
                    label="Status: "
                    options={['Active', 'Inactive']}
                    className='mb-4 cursor-pointer'
                    {...register('status', { required: true })}
                />

                <Button
                    className="w-full mt-4 cursor-pointer"
                    type="submit"
                    bgColor={ post ? "bg-green-500" : 'bg-blue-500' }
                >{ post ? 'Update' : 'Submit'}</Button>

            </div>
        </form>
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