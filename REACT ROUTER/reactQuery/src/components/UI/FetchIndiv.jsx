import { useEffect, useState } from "react"
import { getPost } from "../../API/Api"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { NavLink } from "react-router-dom"


// Fetch individual post
export default function FetchIndiv() {

    const { id } = useParams()

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['post', id],              //passing id is optional here
        queryFn: () => getPost(id)
    })

    if(isPending) return 'Loading....'
    if(isError) return console.log(error)

    return (
        <div>
            <div className="section-accordion">
                    <h1>post Id Number : {data.id}</h1>
                    <NavLink to='/fetchRQ'>
                        <button>Go Back</button>
                    </NavLink>  
                <li>
                    <p>Id: {data.id}</p>
                    <p>Title: {data.title}</p>
                    <p>Body: {data.body}</p>
                </li>
            </div>
        </div>
    )
}