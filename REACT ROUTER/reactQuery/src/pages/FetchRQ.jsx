import { useEffect, useState } from "react"
// import { getPostData } from "../API/Api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { fetchPosts, deletePost, updatePost, updatePost2} from "../API/Api";


export default function FetchRQ() {

    const [pageNo, setPageNo] = useState(0)
    const [isupdate, setIsUpdate] = useState(false)
    const [postid, setPostId] = useState(0)
    const queryClient = useQueryClient()


    const { data, isLoading, isError, error,} = useQuery({
        queryKey: ['posts', pageNo],    //useState
        queryFn: () => fetchPosts(pageNo),    //useEffect
        // gcTime: 1000,
        // staleTime: 5000,
        // refetchInterval: 2000,                   //Polling data
        // refetchIntervalInBackground: true,
        placeholderData: keepPreviousData,
    })


    // useMutation hook for delete post
    const deleteMutation = useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: (data, id) => {                                     // Here, data is not apiData it's onSuccess data
            queryClient.setQueryData(['posts', pageNo], (item) => {
                return item?.filter((post) => post.id !== id)
            })
        }
    })


    // useMutation hook for update post
    const updateMutation = useMutation({
        mutationFn: (id) => updatePost(id),
        onSuccess: (apiData, id) => {                                // Here, apiData is data which pass as arguments when api call
            setIsUpdate(false)
            queryClient.setQueryData(['posts', pageNo], (item) => {
                return item?.map((post) => (
                    post.id === id ? { ...post, title: apiData.data.title } : post
                ))
            })
        }
    })



    const newupdate = useMutation({
        mutationFn: (id)=> updatePost2(id),
        onSuccess: (resdata, id) =>{
            setIsUpdate(false)
            queryClient.setQueryData(['posts',pageNo], (item)=>{
                return item.map((post)=> (
                    post.id === id ? {...post, title: resdata.data.title} : post
                ))
            })
        }
    })



    //isLoading, isError & error 
    if (isLoading) return <div><h1>Loading......</h1></div>
    if (isError) return <div><h1> Error : {error.message || "Something Went Wrong!!"} </h1></div>

    return (
        <div>
            <ul className="section-accordion">
                {
                    isupdate ? <div>
                    <p>Add Title: </p>
                    <div className="flex">
                        <input type="text" id="inputbox" className="border-white border-2" /><button className="w-50" onClick={()=> newupdate.mutate(postid)}>Update</button>
                    </div>
                    </div> : ''
                }

                {
                    data?.map((item) => {
                        const { id, title, body } = item

                        return (
                            <li key={id} >
                                <NavLink to={`/fetchRQ/${id}`}>
                                    <p>Id: {id}</p>
                                    <p>Title: {title}</p>
                                    <p>Body: {body}</p>
                                </NavLink>
                                <button className="mt-5 text-black" onClick={() => deleteMutation.mutate(id)}>Delete</button>
                                <button className="mt-5 text-black" onClick={() => updateMutation.mutate(id)}>Update</button>
                                <button className="mt-5 text-black" onClick={() => {setPostId(id),setIsUpdate(true)}}>Add</button>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="pagination-section pt-15">
                <button onClick={() => setPageNo(() => pageNo - 3)} disabled={pageNo === 0 ? true : false} >Prev</button>
                <h1>{(pageNo / 3) + 1}</h1>
                <button onClick={() => setPageNo(() => pageNo + 3)}>Next</button>
            </div>
        </div>
    )
}