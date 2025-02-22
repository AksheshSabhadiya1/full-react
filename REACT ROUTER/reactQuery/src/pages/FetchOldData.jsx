import { useEffect, useState } from "react"
import { getAllData} from "../API/Api";


export default function FetchOldData() {

    const [post, setPost] = useState([])
    const [loader, setloder] = useState(true)
    const [error, setError] = useState(false)

    const getPostData = async () => {
        try {
            const res = await getAllData()
            res.status === 200 ? setPost(res.data) : []
            setloder(false)

        } catch (error) {
            console.log(error);
            setError(true)
            setloder(false)
        }
    }

    useEffect(()=>{
        getPostData()
    },[])

    if(error) return <div><h1>Something Went Wrong!!</h1></div>

    return !loader ? (
        <div>
            <ul className="section-accordion">
                {
                    post?.map((item)=> {
                        const {id, title, body} = item

                        return (
                        <li key={id}>
                            <p>Id: {id}</p>
                            <p>Title: {title}</p>
                            <p>Body: {body}</p>
                        </li>
                    )})
                }
            </ul>
        </div>
    ) : <div>
        <h1>Loading.....</h1>
    </div>
}