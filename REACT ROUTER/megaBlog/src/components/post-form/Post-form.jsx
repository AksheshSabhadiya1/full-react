import React, { useCallback, useEffect } from "react";
import { Button, Select, Input, RTE } from '../index'
import { useForm } from "react-hook-form";
import appwriteService from '../../appwrite/conf'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function PostForm({ post }) {

    const navigate = useNavigate()
    const userData = useSelector(state => state.userData)
    console.log("userdata", userData);

    const { register, control, handleSubmit, watch, setValue, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })

    const submit = async (data) => {
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
    }


    const slugTransform = useCallback((value) => {
        if (value && typeof (value) === 'string') {
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


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
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
                    className='mb-4'
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
                    options={['active', 'inactive']}
                    className='mb-4'
                    {...register('status', { required: true })}
                />

                <Button
                    className="w-full mt-4"
                    type="submit"
                    bgColor={post ? "bg-green-500" : undefined }
                >{post ? 'Update' : 'Submit'}</Button>

            </div>
        </form>
    )
}